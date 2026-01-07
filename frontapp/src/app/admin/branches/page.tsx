import Link from "next/link";
import { Button, Card, Input } from "../../component/ui/ui";
import s from "./branches.module.css";

const rows = [
  { name: "강남 본점", id: "GN001", manager: "박지민", phone: "010-1234-5678", addr: "서울시 강남구 ...", created: "2023-05-15", status: "운영중" },
  { name: "홍대 지점", id: "HD002", manager: "김서연", phone: "010-9876-5432", addr: "서울시 마포구 ...", created: "2023-06-22", status: "운영중" },
  { name: "부산 해운대점", id: "BS003", manager: "이준호", phone: "010-5555-7777", addr: "부산시 해운대구 ...", created: "2023-07-10", status: "중지" },
];

export default function BranchesPage() {
  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.h1}>지점 목록 관리</h1>
        <Link href="/admin/branches/new">
          <Button>신규 지점 생성</Button>
        </Link>
      </div>

      <Card>
        <div className={s.filters}>
          <Input placeholder="지점명 또는 지점ID 검색" />
          <Input placeholder="상태(운영중/중지)" />
          <Button>검색</Button>
          <Button variant="secondary">초기화</Button>
        </div>

        <div style={{ height: 12 }} />

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>지점명</th>
                <th>지점ID</th>
                <th>담당자명</th>
                <th>연락처</th>
                <th>주소</th>
                <th>생성일</th>
                <th>상태</th>
                <th style={{ textAlign: "right" }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={r.id} className={idx === rows.length - 1 ? s.trLast : ""}>
                  <td>{r.name}</td>
                  <td>{r.id}</td>
                  <td>{r.manager}</td>
                  <td>{r.phone}</td>
                  <td className={s.addr} title={r.addr}>{r.addr}</td>
                  <td>{r.created}</td>
                  <td>{r.status}</td>
                  <td>
                    <div className={s.actions}>
                      <Link href={`/admin/branches/${r.id}`}>
                        <Button style={{ padding: "8px 10px", fontSize: 12 }}>상세</Button>
                      </Link>
                      <Button variant="secondary" style={{ padding: "8px 10px", fontSize: 12 }}>
                        ID 재발급
                      </Button>
                      <Button variant="danger" style={{ padding: "8px 10px", fontSize: 12 }}>
                        {r.status === "운영중" ? "중지" : "재개"}
                      </Button>
                    </div>
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
