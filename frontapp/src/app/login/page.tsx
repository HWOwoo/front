import Link from "next/link";
import { Button, Card, Input, Label } from "../component/ui/ui";
import s from "./login.module.css";

export default function LoginPage() {
  return (
      <div className={s.wrap}>
        <div className={s.box}>
          <div className={s.head}>
            <div className={s.titleRow}>
              <span style={{ fontSize: 24 }}>🏛️</span>
              <div className={s.title}>관리자</div>
            </div>
            <div className={s.sub}>관리자 시스템에 로그인하세요</div>
          </div>

          <Card>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <Label>아이디</Label>
                <Input placeholder="관리자 아이디를 입력하세요" />
              </div>
              <div>
                <Label>비밀번호</Label>
                <Input type="password" placeholder="비밀번호를 입력하세요" />
              </div>

              <Link href="/admin/dashboard" style={{ marginTop: 8 }}>
                <Button style={{ width: "100%" }}>로그인</Button>
              </Link>
            </div>
          </Card>

          <div className={s.footer}>© 2023 다이클로 관리자 시스템. All Rights Reserved.</div>
        </div>
      </div>
  );
}