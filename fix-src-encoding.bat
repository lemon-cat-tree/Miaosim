@echo off
chcp 65001 >nul
echo 开始修复src目录下文件的中文编码问题...

REM 只处理src目录下的文件
for /R "src" %%f in (*.wpy *.js *.json) do (
    echo 处理文件: %%f
    REM 使用PowerShell读取并重新保存为UTF-8
    powershell -Command "& { $content = Get-Content '%%f' -Raw -Encoding UTF8 -ErrorAction SilentlyContinue; if ([string]::IsNullOrEmpty($content)) { $content = Get-Content '%%f' -Raw -Encoding Default -ErrorAction SilentlyContinue }; [System.IO.File]::WriteAllText('%%f', $content, [System.Text.Encoding]::UTF8) }"
)

echo src目录编码修复完成！
pause