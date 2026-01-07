import Link from "next/link";
import { Button, Card, Input, Label, Textarea } from "../../component/ui/ui";
import s from "./detail.module.css";

export default async function BranchDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // mock
  const branch = {
    id,
    name: id === "GN001" ? "강남 본점" : "지점",
    manager: "박지민",
    phone: "010-1234-5678",
    addr: "서울시 강남구 ...",
    status: "운영중",
  };

  const products = Array.from({ length: 6 }).map((_, i) => ({
    code: `P-${id}-${100 + i}`,
    name: ["샴푸", "핸드크림", "세제", "치약"][i % 4] + ` ${i + 1}`,
    price: (12000 + i * 1500).toLocaleString(),
    stock: 20 - i,
    state: i % 3 === 0 ? "판매중지" : "판매중",
  }));

  const orders = Array.from({ length: 6 }).map((_, i) => ({
    orderNo: `ORD-${id}-20${30 + i}`,
    product: products[i].name,
    qty: (i % 4) + 1,
    time: `2023-11-0${(i % 7) + 1} 1${i}:2${i}`,
    status: ["미처리", "처리중", "완료"][i % 3],
  }));

  return (
    <div className={s.page}>
      <div className={s.top}>
        <div>
          <div className={s.h1}>지점 상세</div>
          <div className={s.sub}>
            {branch.name} · ID: {branch.id}
          </div>
        </div>
        <div className={s.badge}>{branch.status}</div>
      </div>

      <div className={s.tabs}>
        <div className={`${s.tab} ${s.tabActive}`}>지점 정보</div>
        <div className={s.tab}>지점 상품</div>
        <div className={s.tab}>지점 주문</div>
      </div>

      <Card title="지점 정보">
        <div className={s.grid}>
          <div className={s.row}>
            <Label>지점명</Label>
            <Input defaultValue={branch.name} />
          </div>
          <div className={s.row}>
            <Label>지점ID</Label>
            <Input defaultValue={branch.id} disabled />
          </div>
          <div className={s.row}>
            <Label>담당자명</Label>
            <Input defaultValue={branch.manager} />
          </div>
          <div className={s.row}>
            <Label>연락처</Label>
            <Input defaultValue={branch.phone} />
          </div>
          <div className={`${s.row} ${s.full}`}>
            <Label>주소</Label>
            <Input defaultValue={branch.addr} />
          </div>
          <div className={`${s.row} ${s.full}`}>
            <Label>메모</Label>
            <Textarea defaultValue={"운영 메모..."} />
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div className={s.actions}>
          <Link href="/admin/branches">
            <Button variant="secondary">목록</Button>
          </Link>
          <Button variant="secondary">ID 재발급</Button>
          <Button>저장</Button>
        </div>
      </Card>

      <Card
        title="지점 상품 (미리보기)"
        right={<Link href="/admin/products/new"><Button>상품 추가</Button></Link>}
      >
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>상품코드</th>
                <th>상품명</th>
                <th>가격</th>
                <th>재고</th>
                <th>상태</th>
                <th style={{ textAlign: "right" }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr key={p.code} className={idx === products.length - 1 ? s.trLast : ""}>
                  <td>{p.code}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td>{p.state}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button variant="secondary" style={{ padding: "8px 10px", fontSize: 12 }}>
                      수정
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="지점 주문 (미리보기)">
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>상품명</th>
                <th>수량</th>
                <th>주문일시</th>
                <th>상태</th>
                <th style={{ textAlign: "right" }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, idx) => (
                <tr key={o.orderNo} className={idx === orders.length - 1 ? s.trLast : ""}>
                  <td>{o.orderNo}</td>
                  <td>{o.product}</td>
                  <td>{o.qty}</td>
                  <td>{o.time}</td>
                  <td>{o.status}</td>
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
