import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  const userName = '홍길동';

  return (
    <div className="min-h-screen flex">
      <aside className={`bg-gray-800 text-white w-64 p-4 space-y-2 ${open ? 'block' : 'hidden'} md:block`}>
        <nav className="space-y-2">
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">Dashboard</Link>
          <Link to="/docs" className="block p-2 rounded hover:bg-gray-700">문서</Link>
          <Link to="/slides" className="block p-2 rounded hover:bg-gray-700">슬라이드</Link>
          <Link to="/sheets" className="block p-2 rounded hover:bg-gray-700">시트</Link>
          <Link to="/kb" className="block p-2 rounded hover:bg-gray-700">지식베이스</Link>
          <Link to="/templates" className="block p-2 rounded hover:bg-gray-700">템플릿</Link>
          <Link to="/team" className="block p-2 rounded hover:bg-gray-700">팀</Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white border-b p-4">
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="material-icons">menu</span>
          </button>
          <div className="flex items-center space-x-2">
            <span>{userName}</span>
            <button className="text-sm text-blue-600">로그아웃</button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
