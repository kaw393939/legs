@echo off
echo 🚀 Student Deployment Script
echo This will commit your changes and deploy to GitHub Pages
echo.
pause
powershell -ExecutionPolicy Bypass -File "./scripts/deploy-student.ps1"
pause
