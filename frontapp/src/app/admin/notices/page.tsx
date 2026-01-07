import { Button, Card, Input, Label, Textarea } from "../../component/ui/ui";
import s from "./notices.module.css";

export default function NoticesPage() {
  const list = Array.from({ length: 8 }).map((_, i) => ({
    id: `N-${100 + i}`,
    title: `공지사항 제목 ${i + 1}`,
    created: `2023-11-${String((i % 9) + 1).padStart(2, "0")}`,
    target: i % 2 === 0 ? "전체" : "특정 지점",
  }));

  return (
    <div className={s.page}>
      <h1 className={s.h1}>공지/운영</h1>

      <Card title="공지사항 등록">
        <div className={s.grid}>
          <div className={s.row}>
            <Label>제목</Label>
            <Input placeholder="공지 제목" />
          </div>
          <div className={s.row}>
            <Label>대상</Label>
            <Input placeholder="예) 전체 / 지점ID(GN001)" />
          </div>
          <div className={`${s.row} ${s.full}`}>
            <Label>내용</Label>
            <Textarea placeholder="공지 내용을 입력하세요" />
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div className={s.actions}>
          <Button variant="secondary">미리보기</Button>
          <Button>등록</Button>
        </div>
      </Card>

      <Card title="공지사항 목록">
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>제목</th>
                <th>대상</th>
                <th>등록일</th>
                <th style={{ textAlign: "right" }}>액션</th>
              </tr>
            </thead>
            <tbody>
              {list.map((x, idx) => (
                <tr key={x.id} className={idx === list.length - 1 ? s.trLast : ""}>
                  <td>{x.id}</td>
                  <td>{x.title}</td>
                  <td>{x.target}</td>
                  <td>{x.created}</td>
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
    </div>
  );
}
