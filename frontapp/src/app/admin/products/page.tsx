import Link from "next/link";
import s from "./products.module.css";

const products = [
  { id: "P001", name: "유기농 플레인 요거트", category: "유제품", price: 12000, stock: 150, status: "판매중" },
  { id: "P002", name: "대왕초 고추장", category: "장류", price: 8500, stock: 80, status: "판매중" },
  { id: "P003", name: "국산 된장", category: "장류", price: 9000, stock: 120, status: "판매중" },
  { id: "P004", name: "그릭 요거트", category: "유제품", price: 15000, stock: 0, status: "품절" },
  { id: "P005", name: "청양고추 고추장", category: "장류", price: 9500, stock: 45, status: "판매중" },
  { id: "P006", name: "천일염", category: "조미료", price: 5000, stock: 200, status: "판매중지" },
];

export default function ProductsPage() {
  function getStatusClass(status: string) {
    if (status === "판매중") return s.statusActive;
    if (status === "품절") return s.statusOutOfStock;
    if (status === "판매중지") return s.statusInactive;
    return "";
  }

  return (
    <div className={s.page}>
      <div className={s.header}>
        <h1 className={s.h1}>상품 목록</h1>
        <Link href="/admin/products/new">
          <button className={s.btnPrimary}>신규 상품 등록</button>
        </Link>
      </div>

      {/* 검색 영역 */}
      <div className={s.searchBar}>
        <div className={s.searchInput}>
          <input type="text" placeholder="상품명 또는 상품ID 검색" className={s.input} />
        </div>
        <div className={s.searchRight}>
          <select className={s.select}>
            <option>전체 카테고리</option>
            <option>유제품</option>
            <option>장류</option>
            <option>조미료</option>
          </select>
          <select className={s.select}>
            <option>전체 상태</option>
            <option>판매중</option>
            <option>품절</option>
            <option>판매중지</option>
          </select>
          <div className={s.searchButtons}>
            <button className={s.btnPrimary}>검색</button>
            <button className={s.btnSecondary}>초기화</button>
          </div>
        </div>
      </div>

      {/* 테이블 */}
      <div className={s.card}>
        <div className={s.tableHeader}>
          <div className={s.tableCount}>
            총 <strong>{products.length}개</strong>의 상품
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

        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>상품ID</th>
                <th>상품명</th>
                <th>카테고리</th>
                <th>판매가</th>
                <th>재고</th>
                <th>상태</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr key={p.id} className={idx === products.length - 1 ? s.trLast : ""}>
                  <td>{p.id}</td>
                  <td className={s.productName}>{p.name}</td>
                  <td>{p.category}</td>
                  <td className={s.price}>{p.price.toLocaleString()}원</td>
                  <td className={p.stock === 0 ? s.stockZero : ""}>{p.stock}개</td>
                  <td>
                    <span className={getStatusClass(p.status)}>{p.status}</span>
                  </td>
                  <td>
                    <div className={s.actions}>
                      <Link href={`/admin/products/${p.id}`}>
                        <button className={`${s.btnSmall} ${s.btnBlue}`}>수정</button>
                      </Link>
                      <button className={`${s.btnSmall} ${s.btnGray}`}>복제</button>
                      {p.status === "판매중" ? (
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
          <button className={s.pageBtn}>{">"}</button>
          <button className={s.pageBtn}>{">>"}</button>
        </div>
      </div>
    </div>
  );
}
