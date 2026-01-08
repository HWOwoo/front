import Link from "next/link";
import { Card } from "../../component/ui/ui";
import s from "./dashboard.module.css";

export default function DashboardPage() {
  const stats = [
    { label: "총 지점 수", value: "42", change: "3 (전월 대비)", up: true, icon: "🏪" },
    { label: "오늘의 주문 건수", value: "87", change: "12 (어제 대비)", up: true, icon: "🛒" },
    { label: "이번 주 주문 건수", value: "412", change: "36 (전주 대비)", up: true, icon: "📅" },
    { label: "미처리 주문 수", value: "14", change: null, up: false, icon: "ℹ️" },
  ];

  const recent = Array.from({ length: 10 }).map((_, i) => ({
    orderNo: `ORD-2023-56${42 - i}`,
    branch: ["강남점", "홍대점", "신촌점", "송파점"][i % 4],
    product: "상품명",
    qty: (i % 4) + 1,
    time: `2023-11-07 ${14 - Math.floor(i / 2)}:${String(Math.abs(55 - (i * 7) % 60)).padStart(2, "0")}`,
    status: ["처리중", "미처리", "완료"][i % 3],
  }));

  function getStatusClass(status: string) {
    if (status === "처리중") return s.badgeProcessing;
    if (status === "미처리") return s.badgePending;
    if (status === "완료") return s.badgeComplete;
    return "";
  }

  return (
      <div className={s.page}>
        <div>
          <h1 className={s.h1}>대시보드</h1>
          <p className={s.desc}>다이클로 관리자 페이지의 주요 지표를 확인하세요.</p>
        </div>

        <div className={s.grid}>
          {stats.map((x) => (
              <div key={x.label} className={s.stat}>
                <div className={s.statTop}>
                  <span className={s.statLabel}>{x.label}</span>
                  <div className={s.statIcon}>{x.icon}</div>
                </div>
                <div className={s.statValue}>{x.value}</div>
                {x.change && (
                    <div className={`${s.statChange} ${x.up ? s.statUp : s.statDown}`}>
                      ▲ {x.change}
                    </div>
                )}
              </div>
          ))}
        </div>

        <Card
            title="최근 주문 내역"
            right={
              <Link href="/admin/orders">
                <button className={s.btnSecondary}>전체보기</button>
              </Link>
            }
        >
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
              <tr>
                <th>주문 번호</th>
                <th>지점명</th>
                <th>상품명</th>
                <th>수량</th>
                <th>주문일시</th>
                <th>상태</th>
                <th>상세보기</th>
              </tr>
              </thead>
              <tbody>
              {recent.map((r, idx) => (
                  <tr key={r.orderNo} className={idx === recent.length - 1 ? s.trLast : ""}>
                    <td>{r.orderNo}</td>
                    <td>{r.branch}</td>
                    <td>{r.product}</td>
                    <td>{r.qty}</td>
                    <td>{r.time}</td>
                    <td>
                    <span className={`${s.badge} ${getStatusClass(r.status)}`}>
                      {r.status}
                    </span>
                    </td>
                    <td>
                      <button className={s.btnPrimary}>상세보기</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className={s.pagination}>
            <span className={s.pageInfo}>총 1개 중 - 1페이지</span>
            <div className={s.pageButtons}>
              <button className={`${s.pageBtn} ${s.pageBtnDisabled}`}>{"<"}</button>
              <button className={`${s.pageBtn} ${s.pageBtnActive}`}>1</button>
              <button className={s.pageBtn}>2</button>
              <button className={s.pageBtn}>3</button>
              <button className={s.pageBtn}>{">"}</button>
            </div>
          </div>
        </Card>
      </div>
  );
}