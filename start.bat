start "Frontend" /b cmd /c "cd frontend & npm ci & npm run build & npm run preview"
start "Generator" /b cmd /c "cd generator & gradlew.bat bootRun"
start "Validator" /b cmd /c "cd validator & gradlew.bat bootRun"
