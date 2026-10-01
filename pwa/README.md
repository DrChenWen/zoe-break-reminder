# Zoe 休息提醒 PWA

> 手机端安装到桌面 = 原生 App 体验

## 文件说明

- `index.html` — 主程序
- `manifest.json` — PWA 配置（名称/图标/显示模式）
- `sw.js` — Service Worker（离线缓存）
- `zoe-avatar.jpg` — Zoe 头像
- `Zoe休息.mp4` — 休息提醒视频

## 部署方式

### 方式一：Vercel（推荐，30秒完成）
1. 打开 https://vercel.com/new
2. 把这个文件夹拖进去
3. 点 Deploy

### 方式二：GitHub Pages（免费）
1. 创建新仓库，上传所有文件
2. Settings → Pages → 选择 `main` 分支 → Save
3. 等待 2 分钟，访问 `https://你的用户名.github.io/仓库名`

## 手机安装方法

**iPhone / iPad：**
1. 用 Safari 打开链接
2. 点底部分享按钮 ↗
3. 向下滚动，点「添加到主屏幕」

**Android：**
1. 用 Chrome 打开链接
2. 自动弹出安装提示，或点右上角菜单 → 「安装应用」

## 功能

- 🕐 倒计时提醒（25/45/60/90分钟可选）
- 🎬 全屏视频提醒
- 📜 今日休息历史记录
- 📱 安装到桌面，全屏运行
- ✈️ 离线可用（Service Worker 缓存）
