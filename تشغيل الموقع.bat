@echo off
title Area 51 - Shoe Store
color 0a

echo.
echo   ╔══════════════════════════════════════╗
echo   ║        AREA 51 - Shoe Store         ║
echo   ║    Shoes From Another Galaxy 🛸👟   ║
echo   ╚══════════════════════════════════════╝
echo.
echo   [✓] Starting server on port 5500...
echo   [✓] Open: http://localhost:5500
echo.
echo   Press CTRL+C to stop the server
echo.

python -m http.server 5500

pause
