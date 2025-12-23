'use client';

import { useState } from 'react';
import type { ColorPalette } from '../utils/colorGenerator';

interface ComponentShowcaseProps {
  colorPalette: ColorPalette;
  uiStyle: 'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist';
  viewMode: 'desktop' | 'mobile';
}

export default function ComponentShowcase({
  colorPalette,
  uiStyle,
  viewMode,
}: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [switchOn, setSwitchOn] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // 根据不同 UI 风格生成样式类
  const getButtonStyle = (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
    const base = 'px-6 py-3 font-medium transition-all duration-200 cursor-pointer';
    
    switch (uiStyle) {
      case 'flat':
        if (variant === 'primary') {
          return `${base} rounded-lg text-white hover:opacity-90`;
        } else if (variant === 'outline') {
          return `${base} rounded-lg border-2 hover:bg-opacity-10`;
        }
        return `${base} rounded-lg hover:bg-opacity-80`;
      
      case 'neumorphic':
        return `${base} rounded-2xl shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] active:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff]`;
      
      case 'glassmorphic':
        return `${base} rounded-2xl backdrop-blur-md bg-white/30 border border-white/20 shadow-lg hover:bg-white/40`;
      
      case 'ios':
        return `${base} rounded-xl shadow-sm hover:shadow-md active:scale-95`;
      
      case 'material':
        return `${base} rounded shadow-md hover:shadow-lg active:shadow-sm`;
      
      case 'rounded':
        return `${base} rounded-full shadow-sm hover:shadow-md`;
      
      case 'brutalist':
        return `${base} border-4 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`;
      
      default:
        return base;
    }
  };

  const getCardStyle = () => {
    const base = 'p-6 transition-all duration-200';
    
    switch (uiStyle) {
      case 'flat':
        return `${base} rounded-lg bg-white border border-gray-200`;
      
      case 'neumorphic':
        return `${base} rounded-2xl bg-gray-50 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]`;
      
      case 'glassmorphic':
        return `${base} rounded-2xl backdrop-blur-lg bg-white/40 border border-white/20 shadow-xl`;
      
      case 'ios':
        return `${base} rounded-2xl bg-white shadow-sm border border-gray-100`;
      
      case 'material':
        return `${base} rounded bg-white shadow-md hover:shadow-lg`;
      
      case 'rounded':
        return `${base} rounded-3xl bg-white shadow-md`;
      
      case 'brutalist':
        return `${base} border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`;
      
      default:
        return base;
    }
  };

  const getInputStyle = () => {
    const base = 'px-4 py-3 w-full transition-all duration-200';
    
    switch (uiStyle) {
      case 'flat':
        return `${base} rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-0`;
      
      case 'neumorphic':
        return `${base} rounded-xl bg-gray-50 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] focus:outline-none`;
      
      case 'glassmorphic':
        return `${base} rounded-xl backdrop-blur-md bg-white/30 border border-white/20 focus:outline-none focus:bg-white/50`;
      
      case 'ios':
        return `${base} rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400`;
      
      case 'material':
        return `${base} rounded-t border-b-2 border-gray-300 focus:outline-none bg-transparent`;
      
      case 'rounded':
        return `${base} rounded-full border border-gray-300 focus:outline-none focus:ring-2`;
      
      case 'brutalist':
        return `${base} border-4 border-black focus:outline-none focus:translate-x-1 focus:translate-y-1`;
      
      default:
        return base;
    }
  };

  return (
    <div 
      className="p-8 space-y-8"
      style={{
        background: uiStyle === 'glassmorphic' 
          ? `linear-gradient(135deg, ${colorPalette.primaryLight} 0%, ${colorPalette.primary} 100%)`
          : colorPalette.surface
      }}
    >
      {/* 顶部导航栏 */}
      <div className={getCardStyle()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold" style={{ color: colorPalette.text }}>
            示例应用
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* 标签页 */}
      <div className={getCardStyle()}>
        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {['首页', '功能', '设置'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 font-medium transition-all ${
                activeTab === index
                  ? 'border-b-2'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={
                activeTab === index
                  ? { borderColor: colorPalette.primary, color: colorPalette.primary }
                  : {}
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ color: colorPalette.text }}>
          <p className="text-gray-600">这是 {['首页', '功能', '设置'][activeTab]} 标签页的内容。</p>
        </div>
      </div>

      {/* 按钮组 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: colorPalette.text }}>
          按钮样式
        </h4>
        <div className={`flex ${viewMode === 'mobile' ? 'flex-col' : 'flex-row'} gap-4`}>
          <button
            className={getButtonStyle('primary')}
            style={{ backgroundColor: colorPalette.primary }}
          >
            主要按钮
          </button>
          <button
            className={getButtonStyle('secondary')}
            style={{
              backgroundColor: colorPalette.surface,
              color: colorPalette.text,
              border: `2px solid ${colorPalette.border}`
            }}
          >
            次要按钮
          </button>
          <button
            className={getButtonStyle('outline')}
            style={{
              borderColor: colorPalette.primary,
              color: colorPalette.primary,
              backgroundColor: 'transparent'
            }}
          >
            边框按钮
          </button>
        </div>
      </div>

      {/* 表单输入 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: colorPalette.text }}>
          表单控件
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colorPalette.text }}>
              用户名
            </label>
            <input
              type="text"
              placeholder="请输入用户名"
              className={getInputStyle()}
              style={{ 
                color: colorPalette.text,
              }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colorPalette.text }}>
              邮箱地址
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className={getInputStyle()}
              style={{ color: colorPalette.text }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colorPalette.text }}>
              描述信息
            </label>
            <textarea
              placeholder="请输入描述..."
              rows={3}
              className={getInputStyle()}
              style={{ color: colorPalette.text }}
            />
          </div>
        </div>
      </div>

      {/* 开关和复选框 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: colorPalette.text }}>
          选择控件
        </h4>
        <div className="space-y-4">
          {/* 开关 */}
          <div className="flex items-center justify-between">
            <span style={{ color: colorPalette.text }}>启用通知</span>
            <button
              onClick={() => setSwitchOn(!switchOn)}
              className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                uiStyle === 'brutalist' ? 'border-2 border-black' : ''
              }`}
              style={{
                backgroundColor: switchOn ? colorPalette.primary : colorPalette.border,
              }}
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                  uiStyle === 'brutalist' ? 'border-2 border-black' : 'shadow-md'
                } ${switchOn ? 'left-7' : 'left-1'}`}
              />
            </button>
          </div>

          {/* 复选框 */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCheckboxChecked(!checkboxChecked)}
              className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                uiStyle === 'brutalist' ? 'border-2 border-black' : 'border-2'
              }`}
              style={{
                backgroundColor: checkboxChecked ? colorPalette.primary : 'white',
                borderColor: checkboxChecked ? colorPalette.primary : colorPalette.border,
              }}
            >
              {checkboxChecked && (
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span style={{ color: colorPalette.text }}>我同意服务条款</span>
          </div>
        </div>
      </div>

      {/* 滑块 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: colorPalette.text }}>
          滑块控件
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm" style={{ color: colorPalette.textSecondary }}>
            <span>音量</span>
            <span>{sliderValue}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${colorPalette.primary} 0%, ${colorPalette.primary} ${sliderValue}%, ${colorPalette.border} ${sliderValue}%, ${colorPalette.border} 100%)`,
            }}
          />
        </div>
      </div>

      {/* 卡片列表 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: colorPalette.text }}>
          内容卡片
        </h4>
        <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`p-4 cursor-pointer hover:scale-105 transition-transform ${
                uiStyle === 'brutalist'
                  ? 'border-2 border-black bg-white'
                  : uiStyle === 'glassmorphic'
                  ? 'backdrop-blur-md bg-white/40 border border-white/20 rounded-xl'
                  : 'bg-white rounded-lg shadow'
              }`}
            >
              <div
                className="w-full h-24 mb-3 rounded"
                style={{ backgroundColor: colorPalette.primaryLight }}
              />
              <h5 className="font-semibold mb-1" style={{ color: colorPalette.text }}>
                项目 {item}
              </h5>
              <p className="text-sm" style={{ color: colorPalette.textSecondary }}>
                这是一个示例卡片内容
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 通知/警告框 */}
      <div className="space-y-4">
        {[
          { type: 'success', icon: '✓', text: '操作成功完成！', color: colorPalette.success },
          { type: 'warning', icon: '⚠', text: '请注意检查输入内容', color: colorPalette.warning },
          { type: 'error', icon: '✕', text: '发生错误，请重试', color: colorPalette.error },
          { type: 'info', icon: 'ℹ', text: '这是一条提示信息', color: colorPalette.info },
        ].map((alert) => (
          <div
            key={alert.type}
            className={`p-4 flex items-center gap-3 ${
              uiStyle === 'brutalist'
                ? 'border-2 border-black'
                : uiStyle === 'glassmorphic'
                ? 'backdrop-blur-md bg-white/40 border border-white/20 rounded-xl'
                : 'rounded-lg'
            }`}
            style={{
              backgroundColor: uiStyle === 'glassmorphic' ? undefined : `${alert.color}15`,
              borderColor: uiStyle === 'brutalist' ? 'black' : alert.color,
              borderWidth: uiStyle === 'brutalist' ? undefined : '1px',
              borderStyle: uiStyle === 'brutalist' ? undefined : 'solid',
            }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: alert.color }}
            >
              {alert.icon}
            </div>
            <span style={{ color: colorPalette.text }}>{alert.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

