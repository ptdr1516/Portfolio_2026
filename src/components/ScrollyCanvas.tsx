"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";

const FRAME_COUNT = 120; // 0 to 119 inclusive

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Calculate the current frame index based on scroll progress
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        // 1. Preload sequence images
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            // Format number to 3 digits since images are `frame_000`, `frame_001`, etc.
            const seqStr = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${seqStr}_delay-0.066s.png`;
            img.onload = () => {
                loadedCount++;
                // If all images loaded, store them
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Handle Canvas Rendering Logic
    const renderFrame = useCallback((index: number, ctx: CanvasRenderingContext2D) => {
        if (!images[index] || !canvasRef.current) return;
        const canvas = canvasRef.current;

        // Scale image to cover entire canvas size (object-fit: cover equivalent)
        const img = images[index];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    useEffect(() => {
        // 2. Render initial frame once images are loaded
        if (images.length === FRAME_COUNT && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) renderFrame(0, ctx);
        }
    }, [images, renderFrame]);

    useEffect(() => {
        // 3. Update Canvas on Scroll
        if (!canvasRef.current || images.length !== FRAME_COUNT) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        return frameIndex.onChange((latest) => {
            // Use Math.round to get nearest integer frame
            const currentFrame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
            renderFrame(currentFrame, ctx);
        });
    }, [frameIndex, images, renderFrame]);

    useEffect(() => {
        // 4. Handle Window Resize to keep canvas sharp
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame immediately on resize
                const ctx = canvasRef.current.getContext("2d");
                if (ctx && images.length === FRAME_COUNT) {
                    renderFrame(Math.round(frameIndex.get()), ctx);
                }
            }
        };

        handleResize(); // Init size immediately on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex, renderFrame]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            {/* Sticky container that locks canvas to viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 size-full pointer-events-none"
                />
                <Hero progress={scrollYProgress} />
            </div>
        </div>
    );
}
