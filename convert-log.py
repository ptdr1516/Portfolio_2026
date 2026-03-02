import codecs
import sys

try:
    with codecs.open('build-log.txt', 'r', 'utf-16') as f:
        content = f.read()
    with open('build-log-utf8.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully converted build-log.txt to UTF-8")
except Exception as e:
    # Try reading as utf-8 if utf-16 fails
    try:
        with open('build-log.txt', 'r', encoding='utf-8') as f:
            content = f.read()
        with open('build-log-utf8.txt', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Successfully read as UTF-8 and wrote build-log-utf8.txt")
    except:
        print(f"Error: {e}")
