'use client';

import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import PreviewArea from './components/PreviewArea';

export default function Home() {
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [uiStyle, setUiStyle] = useState<'flat' | 'neumorphic' | 'glassmorphic' | 'ios' | 'material' | 'rounded' | 'brutalist'>('flat');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <ControlPanel
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        uiStyle={uiStyle}
        setUiStyle={setUiStyle}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <PreviewArea
        primaryColor={primaryColor}
        uiStyle={uiStyle}
        viewMode={viewMode}
      />
    </div>
  );
}
