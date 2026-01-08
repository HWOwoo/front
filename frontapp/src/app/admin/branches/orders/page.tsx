import Link from "next/link";
import s from "./branch-orders.module.css";

export default function BranchOrdersPage() {
    const branches = [
        { id: "gangnam", name: "서울 강남점", active: true },
        { id: "hongdae", name: "서울 홍대점", active: false },
        { id: "myeongdong", name: "서울 명동점", active: false },
        { id: "haeundae", name: "부산 해운대점", active: false },
        { id: "dongseongro", name: "대구 동성로점", active: false },
    ];

    const orders = [
        { orderNo: "#ORD-2305", customer: "박지민", time: "2023-06-15 14:30", product: "상품명", qty: 1, price: "₩45,000" },
        { orderNo: "#ORD-2304", customer: "김태희", time: "2023-06-15 13:45", product: "", qty: 2, price: "₩78,500" },
        { orderNo: "#ORD-2303", customer: "이민호", time: "2023-06-15 11:20", product: "", qty: 3, price: "₩125,000" },
        { orderNo: "#ORD-2302", customer: "최지우", time: "2023-06-15 10:05", product: "", qty: 1, price: "₩32,000" },
        { orderNo: "#ORD-2301", customer: "정우성", time: "2023-06-14 18:30", product: "", qty: 2, price: "₩67,800" },
    ];

    return (
        <div className={s.shell}>
            {/* Topbar */}
            <div className={s.topbar}>
                <div className={s.topbarLeft}>
                    <span className={s.cartIcon} aria-hidden />
                    <div className={s.topbarTitle}>지점별 주문내역</div>
                </div>

                <div className={s.topbarRight}>
                    <div className={s.searchWrap}>
                        <input className={s.searchInput} placeholder="검색" />
                    </div>
                    <button className={s.iconBtn} aria-label="알림">
                        🔔
                    </button>
                    <div className={s.profile}>
                        <div className={s.avatar}>KM</div>
                        <div className={s.profileName}>김매니저</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className={s.page}>
                {/* Sidebar */}
                <aside className={s.sidebar}>
                    <div className={s.sidebarTitle}>지점 목록</div>

                    <div className={s.branchList}>
                        {branches.map((b) => (
                            <button key={b.id} className={`${s.branchItem} ${b.active ? s.branchItemActive : ""}`}>
                                <span className={s.caret} aria-hidden />
                                <span className={s.branchName}>{b.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className={s.filterSection}>
                        <div className={s.filterTitle}>필터</div>

                        <div className={s.filterGroup}>
                            <span className={s.filterLabel}>주문 상태</span>
                            <select className={s.filterSelect}>
                                <option>전체</option>
                                <option>완료</option>
                                <option>처리중</option>
                                <option>취소</option>
                            </select>
                        </div>

                        <div className={s.filterGroup}>
                            <span className={s.filterLabel}>기간</span>
                            <select className={s.filterSelect}>
                                <option>오늘</option>
                                <option>1주일</option>
                                <option>1개월</option>
                                <option>3개월</option>
                            </select>
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <main className={s.main}>
                    <div className={s.header}>
                        <h1 className={s.h1}>서울 강남점 주문 리스트</h1>
                        <div className={s.headerButtons}>
                            <button className={s.btnGhost}>필터</button>
                            <button className={s.btnGhost}>내보내기</button>
                            <button className={s.btnPrimary}>새 주문</button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className={s.tableBox}>
                        <div className={s.tableWrap}>
                            <table className={s.table}>
                                <thead>
                                <tr>
                                    <th>주문번호</th>
                                    <th>고객명</th>
                                    <th>주문일시</th>
                                    <th>상품명</th>
                                    <th>개수</th>
                                    <th>금액</th>
                                    <th className={s.thRight}>액션</th>
                                </tr>
                                </thead>
                                <tbody>
                                {orders.map((r) => (
                                    <tr key={r.orderNo}>
                                        <td className={s.mono}>{r.orderNo}</td>
                                        <td>{r.customer}</td>
                                        <td className={s.muted}>{r.time}</td>
                                        <td className={s.muted}>{r.product || "\u00A0"}</td>
                                        <td className={s.muted}>{r.qty}개</td>
                                        <td className={s.price}>{r.price}</td>
                                        <td className={s.tdRight}>
                                            <div className={s.actions}>
                                                <Link href={`/admin/orders/${encodeURIComponent(r.orderNo)}`}>
                                                    <button className={`${s.btnSmall} ${s.btnBlue}`}>상세보기</button>
                                                </Link>
                                                <button className={`${s.btnSmall} ${s.btnGreen}`}>상태변경</button>
                                                <button className={`${s.btnSmall} ${s.btnGray}`}>인쇄</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className={s.tableFooter}>
                            <span className={s.tableInfo}>총 152개 주문 중 1-5 표시</span>
                            <div className={s.pagination}>
                                <button className={s.pageBtn}>B</button>
                                <button className={`${s.pageBtn} ${s.pageBtnActive}`}>1</button>
                                <button className={s.pageBtn}>2</button>
                                <button className={s.pageBtn}>3</button>
                                <button className={s.pageBtn}>4</button>
                                <button className={s.pageBtn}>5</button>
                                <button className={s.pageBtn}>B</button>
                            </div>
                        </div>
                    </div>

                    {/* Summary (no "card" feeling) */}
                    <div className={s.summaryArea}>
                        <section className={s.summaryCol}>
                            <div className={s.summaryTitle}>오늘 주문 요약</div>
                            <div className={s.summaryRows}>
                                <div className={s.row}>
                                    <span className={s.label}>총 주문</span>
                                    <span className={s.value}>28건</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>완료된 주문</span>
                                    <span className={s.value}>15건</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>진행중인 주문</span>
                                    <span className={s.value}>10건</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>취소된 주문</span>
                                    <span className={s.value}>3건</span>
                                </div>
                            </div>
                        </section>

                        <section className={`${s.summaryCol} ${s.salesCol}`}>
                            <div className={s.summaryTitle}>매출 현황</div>
                            <div className={s.summaryRows}>
                                <div className={s.row}>
                                    <span className={s.label}>오늘 매출</span>
                                    <span className={s.value}>₩1,245,000</span>
                                    <span className={s.circle}>1</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>이번주 매출</span>
                                    <span className={s.value}>₩5,678,000</span>
                                    <span className={s.circle}>2</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>이번달 매출</span>
                                    <span className={s.value}>₩22,456,000</span>
                                    <span className={s.circle}>3</span>
                                </div>
                                <div className={s.row}>
                                    <span className={s.label}>전월 대비</span>
                                    <span className={`${s.value} ${s.green}`}>+12.5%</span>
                                    <span className={s.circle}>4</span>
                                </div>
                            </div>
                            <div className={s.salesTotal}>86개</div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
