"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import s from "./AdminShell.module.css";

const nav = [
  { label: "대시보드", href: "/admin/dashboard" },
  { label: "지점 목록", href: "/admin/branches" },
  { label: "신규 지점 생성", href: "/admin/branches/new" },
  { label: "전체 주문 리스트", href: "/admin/orders" },
  { label: "상품 등록", href: "/admin/products/new" },
  { label: "공지/운영", href: "/admin/notices" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <div className={s.brand}>
            <span className={s.brandIcon}>🏪</span>
            공동구매 마켓
          </div>

          <div className={s.searchWrap}>
            <input className={s.search} placeholder="상품명 검색" />
          </div>

          <div className={s.actions}>
            <Link className={s.actionLink} href="/admin/products/new">
              상품 생성
            </Link>
            <Link className={s.logout} href="/login">
              로그아웃
            </Link>
          </div>
        </div>
      </header>

      <div className={s.container}>
        <aside className={s.sidebar}>
          <div className={s.menuTitle}>메뉴</div>
          <nav className={s.nav}>
            {nav.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${s.navItem} ${active ? s.active : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className={s.main}>{children}</main>
      </div>
    </div>
  );
}