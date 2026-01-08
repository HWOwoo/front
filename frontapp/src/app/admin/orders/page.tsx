import s from "./orders.module.css";

export default function OrdersPage() {
  const rows = [
    { orderNo: "ORD-20230615-001", branch: "강남점", product: "유기농 플레인 요거트", qty: 3, time: "2023-06-15 14:30:22", status: "완료" },
    { orderNo: "ORD-20230615-002", branch: "홍대점", product: "대왕초 고추장", qty: 1, time: "2023-06-15 15:12:45", status: "처리중" },
    { orderNo: "ORD-20230615-003", branch: "부산점", product: "국산 된장", qty: 2, time: "2023-06-15 16:05:38", status: "완료" },
    { orderNo: "ORD-20230614-001", branch: "대구점", product: "그릭 요거트", qty: 5, time: "2023-06-14 09:22:10", status: "완료" },
    { orderNo: "ORD-20230614-002", branch: "인천점", product: "청양고추 고추장", qty: 1, time: "2023-06-14 11:45:33", status: "취소" },
  ];

  function getStatusClass(status) {
    if (status === "완료") return s.statusComplete;
    if (status === "처리중") return s.statusProcessing;
    if (status === "취소") return s.statusPending;
    return "";
  }

  return (
      <div className={s.page}>
        {/* 헤더 */}
        <div className={s.header}>
          <h1 className={s.h1}>전체 주문 리스트</h1>
          <button className={s.btnPrimary}>엑셀 다운로드</button>
        </div>

        {/* 필터 영역 */}
        <div className={s.filterCard}>
          <div className={s.filterRow}>
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>시작일</span>
              <input type="text" className={s.filterInput} placeholder="YYYY-MM-DD" />
            </div>
            <div className={s.filterGroup}>
              <span className={s.filterLabel}>종료일</span>
              <input type="text" className={s.filterInput} placeholder="YYYY-MM-DD" />
            </div>
            <div className={s.dateButtons}>
              <button className={`${s.dateBtn} ${s.dateBtnActive}`}>오늘</button>
              <button className={s.dateBtn}>1주일</button>
              <button className={s.dateBtn}>1개월</button>
              <button className={s.dateBtn}>3개월</button>
            </div>
          </div>

          <div className={s.filterRow2}>
            <div className={s.selectWrap}>
              <span className={s.filterLabel}>지점 선택</span>
              <select className={s.select}>
                <option>모든 지점</option>
                <option>강남점</option>
                <option>홍대점</option>
                <option>부산점</option>
              </select>
            </div>
            <div className={s.selectWrap}>
              <span className={s.filterLabel}>주문 상태</span>
              <select className={s.select}>
                <option>모든 상태</option>
                <option>완료</option>
                <option>처리중</option>
                <option>취소</option>
              </select>
            </div>
            <div className={s.selectWrap} style={{ flex: 1 }}>
              <span className={s.filterLabel}>검색</span>
              <input type="text" className={s.searchInput} placeholder="주문번호, 상품명 검색" />
            </div>
          </div>
        </div>

        {/* 테이블 영역 */}
        <div className={s.tableCard}>
          <div className={s.tableHeader}>
            <span className={s.tableTitle}>전체 주문 목록</span>
            <span className={s.tableCount}>총 주문: <strong>158건</strong></span>
          </div>

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
                <th>관리</th>
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
                    <td>
                      <span className={getStatusClass(r.status)}>{r.status}</span>
                    </td>
                    <td>
                      <button className={s.btnSmall}>상세보기</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          {/* 페이징 */}
          <div className={s.pagination}>
            <span className={s.pageInfo}>1-5 / 158개 항목 표시</span>
            <div className={s.pageCenter}>
              <button className={s.pageBtn}>{"<"}</button>
              <button className={`${s.pageBtn} ${s.pageBtnActive}`}>1</button>
              <button className={s.pageBtn}>2</button>
              <button className={s.pageBtn}>3</button>
              <span className={s.pageEllipsis}>...</span>
              <button className={s.pageBtn}>32</button>
              <button className={s.pageBtn}>{">"}</button>
            </div>
            <select className={s.pageSelect}>
              <option>10개씩</option>
              <option>20개씩</option>
              <option>50개씩</option>
            </select>
          </div>
        </div>
      </div>
  );
}