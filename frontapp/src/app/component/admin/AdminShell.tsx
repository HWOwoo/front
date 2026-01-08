"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import s from "./AdminShell.module.css";

const dashboardItem = {
  label: "대시보드",
  icon: "",
  href: "/admin/dashboard",
};

const nav = [
  {
    category: "지점 관리",
    icon: "",
    items: [
      { label: "지점 목록", href: "/admin/branches" },
      { label: "신규 지점 생성", href: "/admin/branches/new" },
      { label: "지점 ID/접속기 관리", href: "/admin/branches/devices" },
    ],
  },
  {
    category: "주문 관리",
    icon: "",
    items: [
      { label: "전체 주문 리스트", href: "/admin/orders" },
      { label: "지점별 주문 리스트", href: "/admin/branches/orders" },
    ],
  },
  {
    category: "상품 관리",
    icon: "",
    items: [
      { label: "상품 목록", href: "/admin/products" },
      { label: "상품 등록/수정", href: "/admin/products/new" },
    ],
  },
  {
    category: "공지/운영",
    icon: "",
    items: [{ label: "공지/운영메모", href: "/admin/notices" }],
  },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <div className={s.brand}>
            <span className={s.brandIcon}>🏪</span>
            관리자
          </div>

          <div className={s.searchWrap}>
            <input className={s.search} placeholder="상품명을 입력하세요" />
          </div>

          <div className={s.actions}>
            <button className={s.actionBtn}>3</button>
            <button className={s.actionBtn}>But</button>
            <button className={s.actionBtn}>But</button>
            <div className={s.userInfo}>
              <div className={s.avatar}>👤</div>
              <div className={s.userName}>
                <div>김민호</div>
                <div className={s.userRole}>관리자</div>
              </div>
            </div>
            <button className={s.actionBtn}>But</button>
          </div>
        </div>
      </header>

      <div className={s.container}>
        <aside className={s.sidebar}>
          <nav className={s.nav}>
            <Link
              href={dashboardItem.href}
              className={`${s.navItem} ${s.singleItem} ${
                pathname === dashboardItem.href || pathname?.startsWith(dashboardItem.href + "/")
                  ? s.active
                  : ""
              }`}
            >
              <span className={s.categoryIcon}>{dashboardItem.icon}</span>
              {dashboardItem.label}
            </Link>

            {nav.map((section) => (
              <div key={section.category} className={s.navSection}>
                <div className={s.categoryTitle}>
                  <span className={s.categoryIcon}>{section.icon}</span>
                  {section.category}
                </div>
                <div className={s.categoryItems}>
                  {section.items.map((item) => {
                    const active = pathname === item.href || pathname?.startsWith(item.href + "/");
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
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <main className={s.main}>{children}</main>
      </div>
    </div>
  );
}