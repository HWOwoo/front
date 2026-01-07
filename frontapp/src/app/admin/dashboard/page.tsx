import Link from "next/link";
import { Card, Button } from "../../component/ui/ui";
import s from "./dashboard.module.css";

export default function DashboardPage() {
  const stats = [
    { label: "총 지점 수", value: "42" },
    { label: "오늘의 주문 건수", value: "87" },
    { label: "이번 주 주문 건수", value: "412" },
    { label: "미처리 주문 수", value: "14" },
  ];

  const recent = Array.from({ length: 8 }).map((_, i) => ({
    orderNo: `ORD-2023-56${40 + i}`,
    branch: ["강남점", "홍대점", "신촌점", "송파점"][i % 4],
    product: ["상품명A", "상품명B", "상품명C"][i % 3],
    qty: (i % 4) + 1,
    time: `2023-11-07 1${i}:3${i}`,
    status: ["처리중", "미처리", "완료"][i % 3],
  }));

  return (
    <div className={s.page}>
      <h1 className={s.h1}>대시보드</h1>

      <div className={s.grid}>
        {stats.map((x) => (
          <div key={x.label} className={s.stat}>
            <div className={s.statLabel}>{x.label}</div>
            <div className={s.statValue}>{x.value}</div>
          </div>
        ))}
      </div>

      <Card
        title="최근 주문 내역"
        right={
          <Link href="/admin/orders">
            <Button variant="secondary">전체보기</Button>
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
                <th />
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
                  <td>{r.status}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button style={{ padding: "8px 10px", fontSize: 12 }}>상세보기</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
