@echo off
echo ========================================================
echo  Syncing your latest changes directly to GitHub...
echo ========================================================
echo.

"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Auto-update: live changes"
"C:\Program Files\Git\cmd\git.exe" push -u origin main --force

echo.
echo ========================================================
echo  Upload Complete! Your changes are live on GitHub.
echo ========================================================
pause
