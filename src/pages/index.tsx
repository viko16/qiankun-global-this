import { loadMicroApp } from 'qiankun';
import { useEffect, useRef } from 'react';

export default function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    loadMicroApp({
      name: 'demo',
      entry: 'http://localhost:2333',
      container: container.current || '#container',
    });
  }, []);

  return (
    <div>
      <h2>这是父应用</h2>
      <p>{navigator.userAgent}</p>

      {/* 这里渲染子应用 */}
      <div id="container" ref={container} style={{ border: '1px solid red' }} />
    </div>
  );
}
