'use client';

import { useState } from 'react';

interface ControlPanelProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  uiStyle: 'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist' | 'industrial' | 'corporate';
  setUiStyle: (style: 'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist' | 'industrial' | 'corporate') => void;
  viewMode: 'desktop' | 'mobile';
  setViewMode: (mode: 'desktop' | 'mobile') => void;
}

const presetColors = [
  { name: '蓝色', value: '#3B82F6' },
  { name: '紫色', value: '#8B5CF6' },
  { name: '粉色', value: '#EC4899' },
  { name: '绿色', value: '#10B981' },
  { name: '橙色', value: '#F97316' },
  { name: '红色', value: '#EF4444' },
  { name: '青色', value: '#06B6D4' },
  { name: '黄色', value: '#EAB308' },
];

const uiStyles = [
  { id: 'flat', name: '扁平化', description: '简洁现代的扁平设计' },
  { id: 'neumorphic', name: '新拟态', description: '柔和的3D浮雕效果' },
  { id: 'glassmorphic', name: '玻璃态', description: '透明模糊的玻璃质感' },
  { id: 'ios', name: 'iOS 风格', description: '苹果系统设计语言' },
  { id: 'material', name: 'Material Design', description: '谷歌材质设计' },
  { id: 'rounded', name: '圆角卡片', description: '大圆角柔和风格' },
  { id: 'brutalist', name: '野性主义', description: '粗犷原始的设计风格' },
  { id: 'industrial', name: '工业风', description: '重工业风格，金属质感' },
  { id: 'corporate', name: '传统企业', description: '正式严谨的企业网站' },
] as const;

export default function ControlPanel({
  primaryColor,
  setPrimaryColor,
  uiStyle,
  setUiStyle,
  viewMode,
  setViewMode,
}: ControlPanelProps) {
  const [customColor, setCustomColor] = useState(primaryColor);
  const [copySuccess, setCopySuccess] = useState(false);

  // 获取风格的详细信息
  const getStyleDetails = () => {
    const styleInfo = uiStyles.find(s => s.id === uiStyle);
    
    const details: { [key: string]: string } = {
      'flat': '特点：简洁现代、无阴影设计、2px边框、纯色块、适合商务和工具类应用',
      'neumorphic': '特点：柔和3D浮雕效果、双向阴影（12px扩散）、内凹交互、灰色背景、现代时尚',
      'glassmorphic': '特点：高透明度（20-30%）、强模糊效果（blur-3xl）、边缘光晕、渐变背景、高端精致',
      'ios': '特点：精致圆角（rounded-xl）、轻微阴影、点击缩放动画、半透明边框、优雅简约',
      'material': '特点：纸片层叠隐喻、多层阴影效果、大写字体、清晰交互反馈、符合谷歌规范',
      'rounded': '特点：超大圆角（rounded-3xl，约24px）、柔和深阴影、悬停上浮动画、友好温暖',
      'brutalist': '特点：粗黑边框（3-4px）、强烈偏移阴影、方正造型、大胆排版、个性鲜明',
      'industrial': '特点：深色金属质感、渐变灰黑背景、白色文字、铆钉装饰、工业符号、技术感强',
      'corporate': '特点：白色背景、顶部品牌色条、单线边框、底部强调线、正式字体、企业级严谨',
    };

    return {
      name: styleInfo?.name || '',
      description: styleInfo?.description || '',
      details: details[uiStyle] || ''
    };
  };

  // 复制设计信息
  const copyDesignInfo = async () => {
    const style = getStyleDetails();
    const colorName = presetColors.find(c => c.value === primaryColor)?.name || '自定义颜色';
    
    const designInfo = `【UI设计方案】

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 主题配色
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 主题色：${primaryColor.toUpperCase()}（${colorName}）
• 配色方案：自动生成完整色系
  - 主色及明暗变体
  - 辅助色和强调色
  - 语义化颜色（成功/警告/错误/信息）

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎭 设计风格
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 风格名称：${style.name}
• 风格描述：${style.description}
• ${style.details}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 适配平台
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 当前视图：${viewMode === 'desktop' ? '桌面端' : '移动端'}
• 响应式设计：支持桌面端和移动端自适应

━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ 组件特色
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 按钮：${
  uiStyle === 'flat' ? '简洁纯色块' :
  uiStyle === 'neumorphic' ? '3D浮雕效果' :
  uiStyle === 'glassmorphic' ? '透明玻璃质感' :
  uiStyle === 'ios' ? '精致圆角带阴影' :
  uiStyle === 'material' ? '多层阴影+大写文字' :
  uiStyle === 'rounded' ? '全圆角柔和风格' :
  uiStyle === 'brutalist' ? '粗边框+偏移阴影' :
  uiStyle === 'industrial' ? '金属质感深色系' :
  '白色背景+色条装饰'
}
• 卡片：${
  uiStyle === 'flat' ? '2px边框无阴影' :
  uiStyle === 'neumorphic' ? '双向阴影浮雕' :
  uiStyle === 'glassmorphic' ? '高度透明模糊' :
  uiStyle === 'ios' ? '细腻圆角轻阴影' :
  uiStyle === 'material' ? '纸片层叠效果' :
  uiStyle === 'rounded' ? '超大圆角深阴影' :
  uiStyle === 'brutalist' ? '粗边框偏移阴影' :
  uiStyle === 'industrial' ? '金属背景铆钉装饰' :
  '顶部色条白底'
}
• 输入框：${
  uiStyle === 'flat' ? '2px边框聚焦环' :
  uiStyle === 'neumorphic' ? '内凹阴影效果' :
  uiStyle === 'glassmorphic' ? '透明模糊背景' :
  uiStyle === 'ios' ? '浅灰背景细边框' :
  uiStyle === 'material' ? '底部线条设计' :
  uiStyle === 'rounded' ? '全圆角输入框' :
  uiStyle === 'brutalist' ? '粗边框聚焦偏移' :
  uiStyle === 'industrial' ? '深色金属内嵌效果' :
  '底部边框加粗'
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 应用场景
━━━━━━━━━━━━━━━━━━━━━━━━━━━
${
  uiStyle === 'flat' ? '✓ 企业管理系统\n✓ 数据分析平台\n✓ 办公协作工具\n✓ B2B应用' :
  uiStyle === 'neumorphic' ? '✓ 智能家居控制\n✓ 音乐播放器\n✓ 创意工具\n✓ 个性化应用' :
  uiStyle === 'glassmorphic' ? '✓ 高端品牌网站\n✓ 作品集展示\n✓ 金融理财应用\n✓ 奢侈品电商' :
  uiStyle === 'ios' ? '✓ 移动端应用\n✓ 社交应用\n✓ 生活服务\n✓ 工具类应用' :
  uiStyle === 'material' ? '✓ Android应用\n✓ 跨平台应用\n✓ 内容型产品\n✓ 新闻阅读' :
  uiStyle === 'rounded' ? '✓ 社交网络\n✓ 电商平台\n✓ 旅游应用\n✓ 儿童教育' :
  uiStyle === 'brutalist' ? '✓ 艺术作品集\n✓ 音乐网站\n✓ 潮流品牌\n✓ 创意工作室' :
  uiStyle === 'industrial' ? '✓ 工业制造企业\n✓ 重工业公司\n✓ 机械设备厂商\n✓ 技术型企业' :
  '✓ 传统企业官网\n✓ 政府机构\n✓ 金融机构\n✓ 教育机构'
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 本方案由"熵析云枢网络科技"UI预览工具生成
🌐 专业的软件外包服务 | 定制化UI/UX设计
`;

    try {
      await navigator.clipboard.writeText(designInfo);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
      alert('复制失败，请手动复制');
    }
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          软件风格预览工具
        </h1>
        <p className="text-sm text-gray-500">熵析云枢网络科技</p>
      </div>

      {/* 主题色选择 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">主题色系</h2>
        
        {/* 预设颜色 */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {presetColors.map((color) => (
            <button
              key={color.value}
              onClick={() => {
                setPrimaryColor(color.value);
                setCustomColor(color.value);
              }}
              className="group relative"
              title={color.name}
            >
              <div
                className={`w-14 h-14 rounded-lg transition-all ${
                  primaryColor === color.value
                    ? 'ring-2 ring-offset-2 ring-gray-900 scale-110'
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
              />
              <div className="text-xs text-center mt-1 text-gray-600">
                {color.name}
              </div>
            </button>
          ))}
        </div>

        {/* 自定义颜色 */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            自定义颜色
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="w-14 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="#3B82F6"
            />
            <button
              onClick={() => setPrimaryColor(customColor)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
            >
              应用
            </button>
          </div>
        </div>
      </div>

      {/* UI 风格选择 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">UI 风格</h2>
        <div className="space-y-2">
          {uiStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setUiStyle(style.id as typeof uiStyle)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                uiStyle === style.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium text-gray-900">{style.name}</div>
              <div className="text-sm text-gray-500 mt-1">
                {style.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 视图模式 */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">视图模式</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
              viewMode === 'desktop'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🖥️ 桌面端
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
              viewMode === 'mobile'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📱 移动端
          </button>
        </div>
      </div>

      {/* 复制设计信息 */}
      <div className="mb-8">
        <button
          onClick={copyDesignInfo}
          className={`w-full px-6 py-4 rounded-lg font-semibold transition-all ${
            copySuccess
              ? 'bg-green-500 text-white'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl'
          }`}
        >
          {copySuccess ? (
            <span className="flex items-center justify-center gap-2">
              ✓ 已复制到剪贴板
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              📋 复制设计方案
            </span>
          )}
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          一键复制当前配色和风格信息
        </p>
      </div>
    </div>
  );
}

