'use client';
import Feed from '../components/Feed';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';

export default function HomePage() {
  return (
    <div className="row g-4">
      <div className="col-12 col-md-3"><SidebarLeft /></div>
      <div className="col-12 col-md-6"><Feed /></div>
      <div className="col-12 col-md-3"><SidebarRight /></div>
    </div>
  );
}