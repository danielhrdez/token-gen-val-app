(cd frontend ; npm ci ; npm run build ; npm run preview) &
(cd generator ; ./gradlew bootRun) &
(cd validator ; ./gradlew bootRun)
