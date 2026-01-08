import Link from "next/link";
import { Card, Input } from "../../component/ui/ui";
import s from "./branches.module.css";

const rows = [
  { name: "강남 본점", id: "GN001", manager: "박지민", phone: "010-1234-5678", addr: "서울시 강남구 테헤란로 152", created: "2023-05-15", status: "운영중" },
  { name: "홍대 지점", id: "HD002", manager: "김서연", phone: "010-9876-5432", addr: "서울시 마포구 와우신로 94", created: "2023-06-22", status: "운영중" },
  { name: "부산 해운대점", id: "BS003", manager: "이준호", phone: "010-5555-7777", addr: "부산시 해운대구 우동 센텀2로 25", created: "2023-07-10", status: "중지" },
  { name: "대구 중앙점", id: "DG004", manager: "최민서", phone: "010-2222-3333", addr: "대구시 중구 동성로 45", created: "2023-08-05", status: "운영중" },
  { name: "인천 송도점", id: "IC005", manager: "정다희", phone: "010-8888-9999", addr: "인천시 연수구 송도동 컨벤시아대로 165", created: "2023-09-12", status: "운영중" },
  { name: "광주 충장로점", id: "GJ006", manager: "한지우", phone: "010-4444-1111", addr: "광주시 동구 충장로 인길 42", created: "2023-10-20", status: "중지" },
];

export default function BranchesPage() {
  function getStatusClass(status: string) {
    if (status === "운영중") return s.statusActive;
    if (status === "중지") return s.statusInactive;
    return "";
  }

  return (
      <div className={s.page}>
        <div className={s.header}>
          <h1 className={s.h1}>지점 목록 관리</h1>
          <Link href="/admin/branches/new">
            <button className={s.btnPrimary}>신규 지점 생성</button>
          </Link>
        </div>

        {/* 검색 영역 - 카드 밖에 별도 블럭 */}
        <div className={s.searchBar}>
          <div className={s.searchInput}>
            <Input placeholder="지점명 또는 지점ID 검색" style={{ width: "100%" }} />
          </div>
          <div className={s.searchRight}>
            <div className={s.radioGroup}>
              <span>상태:</span>
              <label><input type="radio" name="status" defaultChecked /> 운영중</label>
              <label><input type="radio" name="status" /> 중지</label>
            </div>
            <div className={s.searchButtons}>
              <button className={s.btnPrimary}>검색</button>
              <button className={s.btnSecondary}>초기화</button>
            </div>
          </div>
        </div>

        <Card>
          {/* 테이블 헤더 */}
          <div className={s.tableHeader}>
            <div className={s.tableCount}>
              총 <strong>2개</strong>의 지점
            </div>
            <div className={s.tableActions}>
              <button className={s.btnSecondary}>엑셀 다운로드</button>
              <select className={s.select}>
                <option>10개씩 보기</option>
                <option>20개씩 보기</option>
                <option>50개씩 보기</option>
              </select>
            </div>
          </div>

          {/* 테이블 */}
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
                <th>액션</th>
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
                    <td>
                    <span className={getStatusClass(r.status)}>
                      {r.status}
                    </span>
                    </td>
                    <td>
                      <div className={s.actions}>
                        <Link href={`/admin/branches/${r.id}`}>
                          <button className={`${s.btnSmall} ${s.btnBlue}`}>상세</button>
                        </Link>
                        <button className={`${s.btnSmall} ${s.btnGray}`}>ID 재발급</button>
                        {r.status === "운영중" ? (
                            <button className={`${s.btnSmall} ${s.btnRed}`}>중지</button>
                        ) : (
                            <button className={`${s.btnSmall} ${s.btnGreen}`}>재개</button>
                        )}
                      </div>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          {/* 페이징 */}
          <div className={s.pagination}>
            <button className={s.pageBtn}>{"<<"}</button>
            <button className={s.pageBtn}>{"<"}</button>
            <button className={`${s.pageBtn} ${s.pageBtnActive}`}>1</button>
            <button className={s.pageBtn}>2</button>
            <button className={s.pageBtn}>3</button>
            <button className={s.pageBtn}>4</button>
            <button className={s.pageBtn}>5</button>
            <button className={s.pageBtn}>{">"}</button>
            <button className={s.pageBtn}>{">>"}</button>
          </div>
        </Card>
      </div>
  );
}