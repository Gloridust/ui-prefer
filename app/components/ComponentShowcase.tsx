'use client';

import { useState } from 'react';
import type { ColorPalette } from '../utils/colorGenerator';

interface ComponentShowcaseProps {
  colorPalette: ColorPalette;
  uiStyle: 'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist' | 'industrial' | 'corporate';
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
        // 扁平化：简洁无阴影，纯色块
        if (variant === 'primary') {
          return `${base} rounded-md text-white hover:opacity-90`;
        } else if (variant === 'outline') {
          return `${base} rounded-md border-2 hover:bg-opacity-10`;
        }
        return `${base} rounded-md hover:bg-opacity-80`;
      
      case 'neumorphic':
        // 新拟态：强烈的凹凸感，柔和阴影
        if (variant === 'primary') {
          return `${base} rounded-3xl bg-gradient-to-br shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#c5c5c5,inset_-8px_-8px_16px_#ffffff] active:shadow-[inset_10px_10px_20px_#b8b8b8,inset_-10px_-10px_20px_#ffffff]`;
        }
        return `${base} rounded-3xl bg-[#e8e8e8] shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff]`;
      
      case 'glassmorphic':
        // 玻璃态：高透明度，强模糊效果
        return `${base} rounded-2xl backdrop-blur-2xl bg-white/20 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/30 hover:border-white/40`;
      
      case 'ios':
        // iOS：精致圆角，轻微阴影，点击缩放
        if (variant === 'primary') {
          return `${base} rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] hover:shadow-[0_3px_6px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.12)] active:scale-[0.97]`;
        }
        return `${base} rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:scale-[0.97]`;
      
      case 'material':
        // Material Design：纸片层叠，清晰的阴影层次
        if (variant === 'primary') {
          return `${base} rounded shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_5px_-2px_rgba(0,0,0,0.2),0_7px_10px_1px_rgba(0,0,0,0.14),0_2px_16px_1px_rgba(0,0,0,0.12)] active:shadow-[0_5px_5px_-3px_rgba(0,0,0,0.2),0_8px_10px_1px_rgba(0,0,0,0.14),0_3px_14px_2px_rgba(0,0,0,0.12)] uppercase tracking-wider`;
        }
        return `${base} rounded shadow-[0_2px_2px_0_rgba(0,0,0,0.14),0_3px_1px_-2px_rgba(0,0,0,0.12),0_1px_5px_0_rgba(0,0,0,0.2)] hover:shadow-[0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12),0_2px_4px_-1px_rgba(0,0,0,0.2)] uppercase tracking-wider`;
      
      case 'rounded':
        // 圆角卡片：超大圆角，柔和阴影
        return `${base} rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5`;
      
      case 'brutalist':
        // 野性主义：粗黑边框，强烈偏移阴影，方正造型
        return `${base} border-[3px] border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase font-bold tracking-wide`;
      
      case 'industrial':
        // 工业风：金属质感，斜角边框，深阴影
        if (variant === 'primary') {
          return `${base} clip-path-[polygon(0_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%)] bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-[0_6px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_0_0_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.3)] active:translate-y-[4px] border border-gray-600`;
        }
        return `${base} bg-gradient-to-br from-gray-200 to-gray-300 shadow-[0_4px_0_0_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.5)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] border border-gray-400 font-semibold`;
      
      case 'corporate':
        // 传统企业：方正严谨，单色边框，渐变背景
        if (variant === 'primary') {
          return `${base} bg-gradient-to-b font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border-b-[3px]`;
        } else if (variant === 'outline') {
          return `${base} border-2 bg-white hover:bg-gray-50 font-semibold`;
        }
        return `${base} bg-gray-100 border border-gray-300 hover:bg-gray-200 font-semibold`;
      
      default:
        return base;
    }
  };

  const getCardStyle = () => {
    const base = 'p-6 transition-all duration-200';
    
    switch (uiStyle) {
      case 'flat':
        // 扁平化：简单边框，无阴影
        return `${base} rounded-md bg-white border-2 border-gray-200`;
      
      case 'neumorphic':
        // 新拟态：浮雕效果，双向阴影
        return `${base} rounded-3xl bg-[#e8e8e8] shadow-[12px_12px_24px_#c5c5c5,-12px_-12px_24px_#ffffff]`;
      
      case 'glassmorphic':
        // 玻璃态：高度透明，强模糊，边缘光晕
        return `${base} rounded-2xl backdrop-blur-3xl bg-white/25 border-2 border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37),inset_0_0_20px_rgba(255,255,255,0.5)]`;
      
      case 'ios':
        // iOS：细腻圆角，轻阴影，半透明边框
        return `${base} rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100/50`;
      
      case 'material':
        // Material：纸片隐喻，多层阴影
        return `${base} rounded bg-white shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2),0_4px_5px_0_rgba(0,0,0,0.14),0_1px_10px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_5px_-2px_rgba(0,0,0,0.2),0_7px_10px_1px_rgba(0,0,0,0.14),0_2px_16px_1px_rgba(0,0,0,0.12)]`;
      
      case 'rounded':
        // 圆角卡片：超大圆角，柔和深阴影
        return `${base} rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]`;
      
      case 'brutalist':
        // 野性主义：粗边框，偏移阴影
        return `${base} border-[4px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]`;
      
      case 'industrial':
        // 工业风：金属质感，深色背景，铆钉效果
        return `${base} bg-gradient-to-br from-gray-800 to-gray-900 shadow-[inset_0_2px_0_rgba(255,255,255,0.1),0_8px_16px_rgba(0,0,0,0.4)] border-2 border-gray-700 relative before:absolute before:top-2 before:left-2 before:w-3 before:h-3 before:rounded-full before:bg-gray-600 before:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]`;
      
      case 'corporate':
        // 传统企业：白色背景，细线边框，顶部色条
        return `${base} bg-white border border-gray-300 shadow-sm relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r hover:shadow-md`;
      
      default:
        return base;
    }
  };

  const getInputStyle = () => {
    const base = 'px-4 py-3 w-full transition-all duration-200';
    
    switch (uiStyle) {
      case 'flat':
        // 扁平化：简单边框，聚焦时有环
        return `${base} rounded-md border-2 border-gray-300 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-offset-0`;
      
      case 'neumorphic':
        // 新拟态：内凹效果
        return `${base} rounded-2xl bg-[#e8e8e8] shadow-[inset_6px_6px_12px_#c5c5c5,inset_-6px_-6px_12px_#ffffff] focus:outline-none focus:shadow-[inset_8px_8px_16px_#b8b8b8,inset_-8px_-8px_16px_#ffffff]`;
      
      case 'glassmorphic':
        // 玻璃态：透明模糊
        return `${base} rounded-xl backdrop-blur-2xl bg-white/20 border-2 border-white/30 focus:outline-none focus:bg-white/35 focus:border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]`;
      
      case 'ios':
        // iOS：浅灰背景，细边框
        return `${base} rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-300 focus:shadow-sm`;
      
      case 'material':
        // Material：底部线条，聚焦时加粗
        return `${base} rounded-t border-b-2 border-gray-400 focus:outline-none bg-gray-50/50 focus:border-b-[3px] focus:bg-gray-50`;
      
      case 'rounded':
        // 圆角：全圆角输入框
        return `${base} rounded-full border-2 border-gray-300 focus:outline-none focus:border-gray-400 focus:shadow-[0_4px_12px_rgba(0,0,0,0.08)]`;
      
      case 'brutalist':
        // 野性主义：粗边框，聚焦时偏移
        return `${base} border-[3px] border-black focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white`;
      
      case 'industrial':
        // 工业风：深色背景，金属质感，内嵌效果
        return `${base} bg-gradient-to-br from-gray-700 to-gray-800 text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border-2 border-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-[inset_0_3px_6px_rgba(0,0,0,0.6)] placeholder:text-gray-400`;
      
      case 'corporate':
        // 传统企业：白色背景，单线边框，底部强调
        return `${base} bg-white border border-gray-300 border-b-2 focus:outline-none focus:border-gray-400 focus:border-b-[3px] focus:shadow-sm`;
      
      default:
        return base;
    }
  };

  // 获取文字颜色
  const getTextColor = (secondary = false) => {
    if (uiStyle === 'industrial') {
      return secondary ? '#9CA3AF' : '#FFFFFF';
    }
    return secondary ? colorPalette.textSecondary : colorPalette.text;
  };

  // 获取整体容器样式
  const getContainerStyle = () => {
    switch (uiStyle) {
      case 'flat':
        return 'bg-gray-50';
      case 'neumorphic':
        return 'bg-[#e8e8e8]';
      case 'glassmorphic':
        return ''; // 使用渐变背景
      case 'ios':
        return 'bg-gray-50';
      case 'material':
        return 'bg-gray-100';
      case 'rounded':
        return 'bg-gradient-to-br from-gray-50 to-gray-100';
      case 'brutalist':
        return 'bg-yellow-50';
      case 'industrial':
        return 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900';
      case 'corporate':
        return 'bg-gradient-to-b from-gray-50 to-white';
      default:
        return 'bg-white';
    }
  };

  return (
    <div 
      className={`p-8 space-y-8 ${getContainerStyle()}`}
      style={{
        background: uiStyle === 'glassmorphic' 
          ? `linear-gradient(135deg, ${colorPalette.primaryLight} 0%, ${colorPalette.accent} 50%, ${colorPalette.primary} 100%)`
          : undefined
      }}
    >
      {/* 顶部导航栏 */}
      <div className={getCardStyle()}>
        <div className="flex items-center justify-between">
          <h3 className={`text-xl font-bold ${
            uiStyle === 'material' ? 'uppercase tracking-wider' : ''
          } ${
            uiStyle === 'brutalist' ? 'text-2xl' : ''
          } ${
            uiStyle === 'industrial' ? 'text-white' : ''
          } ${
            uiStyle === 'corporate' ? 'text-2xl tracking-tight' : ''
          }`} style={{ 
            color: uiStyle === 'industrial' ? '#fff' : 
                   uiStyle === 'brutalist' ? '#000' : 
                   colorPalette.text 
          }}>
            {uiStyle === 'brutalist' ? '/// 示例应用 ///' : 
             uiStyle === 'industrial' ? '⚙ 示例应用' :
             uiStyle === 'corporate' ? '示例应用系统' :
             '示例应用'}
          </h3>
          <div className="flex gap-2">
            <div className={`w-3 h-3 bg-red-500 ${
              uiStyle === 'brutalist' ? 'border-2 border-black' : 'rounded-full'
            } ${
              uiStyle === 'neumorphic' ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' : ''
            }`} />
            <div className={`w-3 h-3 bg-yellow-500 ${
              uiStyle === 'brutalist' ? 'border-2 border-black' : 'rounded-full'
            } ${
              uiStyle === 'neumorphic' ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' : ''
            }`} />
            <div className={`w-3 h-3 bg-green-500 ${
              uiStyle === 'brutalist' ? 'border-2 border-black' : 'rounded-full'
            } ${
              uiStyle === 'neumorphic' ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]' : ''
            }`} />
          </div>
        </div>
      </div>

      {/* 标签页 */}
      <div className={getCardStyle()}>
        <div className={`flex gap-2 mb-6 ${
          uiStyle === 'material' ? 'border-b-2 border-gray-300' : 
          uiStyle === 'brutalist' ? 'border-b-4 border-black' : 
          'border-b border-gray-200'
        }`}>
          {['首页', '功能', '设置'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-medium transition-all relative ${
                uiStyle === 'neumorphic' && activeTab === index ? 'shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff]' : ''
              } ${
                uiStyle === 'glassmorphic' && activeTab === index ? 'backdrop-blur-xl bg-white/40 rounded-t-xl' : ''
              } ${
                uiStyle === 'rounded' && activeTab === index ? 'rounded-t-3xl' : ''
              } ${
                uiStyle === 'brutalist' && activeTab === index ? 'border-x-[3px] border-t-[3px] border-black -mb-[4px]' : ''
              } ${
                uiStyle === 'material' && activeTab === index ? 'uppercase tracking-wider' : ''
              } ${
                activeTab === index ? '' : 'text-gray-500 hover:text-gray-700'
              }`}
              style={
                activeTab === index && !['neumorphic', 'glassmorphic', 'brutalist'].includes(uiStyle)
                  ? { 
                      borderBottom: uiStyle === 'material' ? `3px solid ${colorPalette.primary}` : `2px solid ${colorPalette.primary}`,
                      color: colorPalette.primary,
                      marginBottom: uiStyle === 'material' ? '-2px' : '-1px'
                    }
                  : activeTab === index ? { color: colorPalette.primary } : {}
              }
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ color: getTextColor() }}>
          <p style={{ color: getTextColor(true) }}>
            {uiStyle === 'brutalist' && '>>> '}
            {uiStyle === 'industrial' && '[INFO] '}
            这是 {['首页', '功能', '设置'][activeTab]} 标签页的内容。
            {uiStyle === 'material' && ' 点击上方标签切换内容。'}
            {uiStyle === 'corporate' && ' 请在上方选择相应的功能模块。'}
          </p>
        </div>
      </div>

      {/* 按钮组 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: getTextColor() }}>
          {uiStyle === 'corporate' ? '操作按钮' : '按钮样式'}
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
        <h4 className="text-lg font-semibold mb-4" style={{ color: getTextColor() }}>
          {uiStyle === 'corporate' ? '信息录入' : '表单控件'}
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: getTextColor() }}>
              用户名
            </label>
            <input
              type="text"
              placeholder={uiStyle === 'industrial' ? '输入用户名' : '请输入用户名'}
              className={getInputStyle()}
              style={{ 
                color: uiStyle === 'industrial' ? '#fff' : colorPalette.text,
              }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: getTextColor() }}>
              邮箱地址
            </label>
            <input
              type="email"
              placeholder={uiStyle === 'industrial' ? 'user@company.com' : 'example@email.com'}
              className={getInputStyle()}
              style={{ color: uiStyle === 'industrial' ? '#fff' : colorPalette.text }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: getTextColor() }}>
              描述信息
            </label>
            <textarea
              placeholder={uiStyle === 'industrial' ? '输入详细描述...' : '请输入描述...'}
              rows={3}
              className={getInputStyle()}
              style={{ color: uiStyle === 'industrial' ? '#fff' : colorPalette.text }}
            />
          </div>
        </div>
      </div>

      {/* 开关和复选框 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: getTextColor() }}>
          {uiStyle === 'corporate' ? '选项设置' : '选择控件'}
        </h4>
        <div className="space-y-4">
          {/* 开关 */}
          <div className="flex items-center justify-between">
            <span style={{ color: getTextColor() }}>
              {uiStyle === 'industrial' ? '[ ] 启用通知' : '启用通知'}
            </span>
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
            <span style={{ color: getTextColor() }}>我同意服务条款</span>
          </div>
        </div>
      </div>

      {/* 滑块 */}
      <div className={getCardStyle()}>
        <h4 className="text-lg font-semibold mb-4" style={{ color: getTextColor() }}>
          {uiStyle === 'corporate' ? '参数调节' : '滑块控件'}
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between text-sm" style={{ color: getTextColor(true) }}>
            <span>{uiStyle === 'industrial' ? '⚡ 音量' : '音量'}</span>
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
        <h4 className="text-lg font-semibold mb-4" style={{ color: getTextColor() }}>
          {uiStyle === 'brutalist' ? '>>> 内容卡片 <<<' : 
           uiStyle === 'material' ? '内容卡片'.toUpperCase() :
           uiStyle === 'industrial' ? '⚙ 项目列表' :
           uiStyle === 'corporate' ? '项目展示' :
           '内容卡片'}
        </h4>
        <div className={`grid ${viewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`p-5 cursor-pointer transition-all ${
                uiStyle === 'flat'
                  ? 'bg-white border-2 border-gray-200 rounded-md hover:border-gray-300'
                  : uiStyle === 'neumorphic'
                  ? 'bg-[#e8e8e8] rounded-2xl shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]'
                  : uiStyle === 'glassmorphic'
                  ? 'backdrop-blur-2xl bg-white/30 border-2 border-white/40 rounded-xl hover:bg-white/40'
                  : uiStyle === 'ios'
                  ? 'bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:scale-[1.02]'
                  : uiStyle === 'material'
                  ? 'bg-white rounded shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),0_8px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1'
                  : uiStyle === 'rounded'
                  ? 'bg-white rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1'
                  : uiStyle === 'industrial'
                  ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 shadow-[0_4px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.5)]'
                  : uiStyle === 'corporate'
                  ? 'bg-white border border-gray-300 hover:shadow-lg hover:-translate-y-1'
                  : 'border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <div
                className={`w-full h-24 mb-3 ${
                  uiStyle === 'flat' ? 'rounded' :
                  uiStyle === 'neumorphic' ? 'rounded-xl shadow-[inset_4px_4px_8px_#c5c5c5,inset_-4px_-4px_8px_#ffffff]' :
                  uiStyle === 'rounded' ? 'rounded-2xl' :
                  uiStyle === 'brutalist' ? 'border-2 border-black' :
                  uiStyle === 'industrial' ? 'border border-gray-600 bg-gradient-to-br from-gray-600 to-gray-700' :
                  'rounded-lg'
                }`}
                style={{ 
                  backgroundColor: uiStyle === 'neumorphic' ? colorPalette.primary : 
                                   uiStyle === 'industrial' ? undefined :
                                   colorPalette.primaryLight,
                  opacity: uiStyle === 'neumorphic' ? 0.3 : 1
                }}
              />
              <h5 className={`font-semibold mb-1 ${
                uiStyle === 'material' ? 'uppercase tracking-wide' : ''
              } ${
                uiStyle === 'industrial' ? 'text-white' : ''
              }`} style={{ 
                color: uiStyle === 'industrial' ? '#fff' : colorPalette.text 
              }}>
                {uiStyle === 'brutalist' ? `[${item}] 项目` : 
                 uiStyle === 'industrial' ? `⚙ 项目 #${item}` :
                 uiStyle === 'corporate' ? `项目编号 ${item}` :
                 `项目 ${item}`}
              </h5>
              <p className="text-sm" style={{ 
                color: uiStyle === 'industrial' ? '#9CA3AF' : colorPalette.textSecondary 
              }}>
                {uiStyle === 'industrial' ? '工业级解决方案' :
                 uiStyle === 'corporate' ? '企业级项目管理系统' :
                 '这是一个示例卡片内容'}
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
            className={`p-4 flex items-center gap-3 transition-all ${
              uiStyle === 'flat'
                ? 'rounded-md border-l-4'
                : uiStyle === 'neumorphic'
                ? 'rounded-2xl shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]'
                : uiStyle === 'glassmorphic'
                ? 'backdrop-blur-2xl bg-white/30 border-2 border-white/40 rounded-xl'
                : uiStyle === 'ios'
                ? 'rounded-xl border shadow-sm'
                : uiStyle === 'material'
                ? 'rounded border-l-4 shadow-md'
                : uiStyle === 'rounded'
                ? 'rounded-3xl border-2'
                : uiStyle === 'industrial'
                ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-l-4 border-2 border-gray-600'
                : uiStyle === 'corporate'
                ? 'border border-l-4 bg-white'
                : 'border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
            style={{
              backgroundColor: uiStyle === 'glassmorphic' 
                ? undefined 
                : uiStyle === 'neumorphic'
                ? '#e8e8e8'
                : uiStyle === 'industrial'
                ? undefined
                : uiStyle === 'corporate'
                ? '#ffffff'
                : `${alert.color}15`,
              borderLeftColor: ['flat', 'material', 'industrial', 'corporate'].includes(uiStyle) ? alert.color : undefined,
              borderColor: uiStyle === 'brutalist' ? 'black' : 
                          ['rounded', 'ios'].includes(uiStyle) ? alert.color : 
                          uiStyle === 'glassmorphic' ? 'rgba(255,255,255,0.4)' :
                          uiStyle === 'industrial' ? '#4B5563' : undefined,
            }}
          >
            <div
              className={`flex items-center justify-center text-white font-bold ${
                uiStyle === 'neumorphic' ? 'w-8 h-8 rounded-full shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff]' :
                uiStyle === 'brutalist' ? 'w-8 h-8 border-2 border-black' :
                uiStyle === 'rounded' ? 'w-8 h-8 rounded-full' :
                uiStyle === 'industrial' ? 'w-8 h-8' :
                'w-6 h-6 rounded-full'
              }`}
              style={{ 
                backgroundColor: uiStyle === 'neumorphic' ? alert.color : alert.color,
                opacity: uiStyle === 'neumorphic' ? 0.8 : 1
              }}
            >
              {alert.icon}
            </div>
            <span className={`${
              uiStyle === 'brutalist' ? 'font-bold' : ''
            } ${
              uiStyle === 'industrial' ? 'text-white' : ''
            }`} style={{ 
              color: uiStyle === 'industrial' ? '#fff' : colorPalette.text 
            }}>
              {uiStyle === 'brutalist' ? `[!] ${alert.text}` : 
               uiStyle === 'material' ? alert.text.toUpperCase() :
               uiStyle === 'industrial' ? `[${alert.type.toUpperCase()}] ${alert.text}` :
               alert.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

