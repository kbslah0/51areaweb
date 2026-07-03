Write-Host ""
Write-Host "  ╔══════════════════════════════════════╗" -ForegroundColor Green
Write-Host "  ║        AREA 51 - Shoe Store         ║" -ForegroundColor Green
Write-Host "  ║    Shoes From Another Galaxy 🛸👟   ║" -ForegroundColor Green
Write-Host "  ╚══════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "  [✓] Starting server on port 5500..." -ForegroundColor Cyan
Write-Host "  [✓] Open: http://localhost:5500" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Press CTRL+C to stop the server" -ForegroundColor Yellow
Write-Host ""

python -m http.server 5500
