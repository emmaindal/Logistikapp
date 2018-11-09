För att köra behöver man installera JSON server på datorn. (lyckades ej lägga denna som en dependency)

npm install -g json-server (kan behövas köras som sudo)

Då vår REACT kör på port 3000, behöver man säga till json server att välja en annan (3000 är dess standard)

Så för att köra krävs ett annat command:
json-server --watch db.json --port 3004

MER INFO:
https://www.npmjs.com/package/json-server