import { Button, Card, Input } from "../../component/ui/ui";
import s from "./orders.module.css";

export default function OrdersPage() {
  const rows = Array.from({ length: 12 }).map((_, i) => ({
    orderNo: `ORD-2023-${9000 + i}`,
    branch: ["강남점", "홍대점", "신촌점", "송파점"][i % 4],
    product: ["상품명A", "상품명B", "상품명C"][i % 3],
    qty: (i % 4) + 1,
    time: `2023-11-${String((i % 9) + 1).padStart(2, "0")} 1${i}:2${i}`,
    status: ["미처리", "처리중", "완료"][i % 3],
  }));

  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.h1}>전체 주문 리스트</h1>
      </div>

      <Card>
        <div className={s.filters}>
          <Input placeholder="주문번호 검색" />
          <Input placeholder="지점명 검색" />
          <Input placeholder="상태(미처리/처리중/완료)" />
          <Button>검색</Button>
        </div>

        <div style={{ height: 12 }} />

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>지점명</th>
                <th>상품명</th>
                <th>수량</th>
                <th>주문일시</th>
                <th>상태</th>
                <th style={{ textAlign: "right" }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={r.orderNo} className={idx === rows.length - 1 ? s.trLast : ""}>
                  <td>{r.orderNo}</td>
                  <td>{r.branch}</td>
                  <td>{r.product}</td>
                  <td>{r.qty}</td>
                  <td>{r.time}</td>
                  <td>{r.status}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button style={{ padding: "8px 10px", fontSize: 12 }}>상세</Button>
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
