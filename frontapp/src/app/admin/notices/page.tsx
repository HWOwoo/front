import s from "./notices.module.css";

export default function NoticesPage() {
  const list = [
    { id: "N-1", title: "시스템 업데이트 안내: 2023년 12월 15일 새로운 기능 추가", created: "2023-12-10" },
    { id: "N-2", title: "서비스 점검 안내: 2023년 12월 9일 새벽 2시~4시", created: "2023-12-01" },
    { id: "N-3", title: "개인정보 처리방침 개정 안내", created: "2023-11-20" },
    { id: "N-4", title: "앱/웹 서비스 운영 방침 안내", created: "2023-11-15" },
    { id: "N-5", title: "신규 사용자 가입 안내 업데이트", created: "2023-11-05" },
  ];

  return (
      <div className={s.page}>
        {/* 등록 */}
        <section className={s.card}>
          <h2 className={s.cardTitle}>공지사항 등록</h2>

          <div className={s.form}>
            <div className={s.field}>
              <label className={s.label}>제목</label>
              <input className={s.input} placeholder="공지사항 제목을 입력하세요" />
            </div>

            <div className={s.field}>
              <label className={s.label}>내용</label>
              <textarea className={s.textarea} placeholder="공지사항 내용을 입력하세요" rows={5} />
            </div>

            <div className={s.formActions}>
              <button className={s.btnPrimary}>등록</button>
            </div>
          </div>
        </section>

        {/* 목록 */}
        <section className={s.card}>
          <div className={s.listHeader}>
            <h2 className={s.cardTitle}>공지사항 목록</h2>

            <div className={s.searchBar}>
              <input className={s.searchInput} placeholder="검색" />
              <button className={s.btnSearch}>검색</button>
            </div>
          </div>

          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
              <tr>
                <th>제목</th>
                <th className={s.thDate}>등록일</th>
                <th className={s.thManage}>관리</th>
              </tr>
              </thead>
              <tbody>
              {list.map((x) => (
                  <tr key={x.id}>
                    <td className={s.tdTitle}>{x.title}</td>
                    <td className={s.tdDate}>{x.created}</td>
                    <td className={s.tdManage}>
                      <button className={s.btnManage}>관리</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className={s.pagination}>
            <button className={s.pageBtn}>이전</button>
            <button className={`${s.pageBtn} ${s.pageActive}`}>1</button>
            <button className={s.pageBtn}>2</button>
            <button className={s.pageBtn}>3</button>
            <button className={s.pageBtn}>4</button>
            <button className={s.pageBtn}>5</button>
            <button className={s.pageBtn}>다음</button>
          </div>
        </section>
      </div>
  );
}
