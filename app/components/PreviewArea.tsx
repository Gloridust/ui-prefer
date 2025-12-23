'use client';

import { useMemo } from 'react';
import { generateColorPalette } from '../utils/colorGenerator';
import ComponentShowcase from './ComponentShowcase';

interface PreviewAreaProps {
  primaryColor: string;
  uiStyle: 'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist';
  viewMode: 'desktop' | 'mobile';
}

export default function PreviewArea({
  primaryColor,
  uiStyle,
  viewMode,
}: PreviewAreaProps) {
  const colorPalette = useMemo(
    () => generateColorPalette(primaryColor),
    [primaryColor]
  );

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">预览效果</h2>
            <p className="text-sm text-gray-500 mt-1">
              当前配色方案和 UI 风格的实时预览
            </p>
          </div>
          <div className="text-sm text-gray-600">
            {viewMode === 'desktop' ? '桌面端视图' : '移动端视图'}
          </div>
        </div>

        {/* 预览容器 */}
        <div
          className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
            viewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'
          }`}
        >
          <ComponentShowcase
            colorPalette={colorPalette}
            uiStyle={uiStyle}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
}

