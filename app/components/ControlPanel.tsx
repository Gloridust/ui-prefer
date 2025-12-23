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
    </div>
  );
}

