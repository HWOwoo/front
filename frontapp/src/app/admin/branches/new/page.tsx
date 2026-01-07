import Link from "next/link";
import { Button, Card, Input, Label } from "../../../component/ui/ui";
import s from "./new.module.css";

export default function NewBranchPage() {
  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.h1}>신규 지점 생성</h1>
        <Link href="/admin/branches">
          <Button variant="secondary">목록으로</Button>
        </Link>
      </div>

      <Card>
        <div className={s.form}>
          <div className={s.row}>
            <div className={s.field}>
              <Label>지점명</Label>
              <Input placeholder="지점명을 입력하세요" />
            </div>
            <div className={s.field}>
              <Label>지점 ID</Label>
              <Input placeholder="자동 생성됩니다" disabled />
            </div>
          </div>
          
          <div className={s.row}>
            <div className={s.field}>
              <Label>담당자명</Label>
              <Input placeholder="담당자명을 입력하세요" />
            </div>
            <div className={s.field}>
              <Label>연락처</Label>
              <Input placeholder="010-1234-5678" />
            </div>
          </div>
          
          <div className={s.field}>
            <Label>주소</Label>
            <Input placeholder="지점 주소를 입력하세요" />
          </div>
          
          <div className={s.actions}>
            <Button style={{ width: "100%" }}>지점 생성</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}