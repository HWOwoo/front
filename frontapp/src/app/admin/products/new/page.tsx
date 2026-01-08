import Link from "next/link";
import s from "./newProduct.module.css";

export default function NewProductPage() {
  return (
      <div className={s.page}>
        {/* 상단 헤더 (좌 타이틀/설명, 우 버튼) */}
        <div className={s.topHeader}>
          <div>
            <h1 className={s.h1}>새 상품 등록</h1>
            <p className={s.desc}>새로운 제품을 추가하고 초기 정보를 설정하세요.</p>
          </div>

          <div className={s.topActions}>
            <Link href="/admin/products" className={s.linkReset}>
              <button className={s.btnCancel}>취소</button>
            </Link>
            <button className={s.btnPrimary}>저장 후 지점 배분하기</button>
          </div>
        </div>

        {/* 메인 폼 카드 */}
        <div className={s.card}>
          <div className={s.cardInner}>
            {/* 1행: 상품명 / 총 수량 */}
            <div className={s.grid2}>
              <div className={s.field}>
                <label className={s.label}>
                  상품명<span className={s.req}>*</span>
                </label>
                <input className={s.input} placeholder="상품명을 입력하세요" />
              </div>

              <div className={s.field}>
                <label className={s.label}>
                  총 수량<span className={s.req}>*</span>
                </label>
                <select className={s.select}>
                  <option>수량을 입력하세요</option>
                  <option>10</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>

            {/* 상품 설명 */}
            <div className={s.field}>
              <label className={s.label}>상품 설명</label>
              <textarea className={s.textarea} placeholder="상품에 대한 상세 설명을 입력하세요" rows={4} />
            </div>

            {/* 2행: 입고 예정일 / 카테고리 */}
            <div className={s.grid2}>
              <div className={s.field}>
                <label className={s.label}>입고 예정일</label>
                <input className={s.input} placeholder="YYYY-MM-DD" />
              </div>

              <div className={s.field}>
                <label className={s.label}>카테고리</label>
                <select className={s.select}>
                  <option>카테고리 선택</option>
                  <option>유제품</option>
                  <option>장류</option>
                  <option>조미료</option>
                </select>
              </div>
            </div>

            {/* 이미지 업로드 */}
            <div className={s.imageRow}>
              <div className={s.uploadBox}>
                <div className={s.plus}>＋</div>
                <div className={s.uploadText}>메인 이미지 추가</div>
              </div>
              <div className={s.uploadBox}>
                <div className={s.plus}>＋</div>
                <div className={s.uploadText}>추가 이미지</div>
              </div>
              <div className={s.uploadBox}>
                <div className={s.plus}>＋</div>
                <div className={s.uploadText}>추가 이미지</div>
              </div>
              <div className={s.uploadBox}>
                <div className={s.plus}>＋</div>
                <div className={s.uploadText}>추가 이미지</div>
              </div>
            </div>

            {/* 내부 메모 */}
            <div className={s.field}>
              <textarea className={s.textarea} placeholder="내부 관리용 메모를 입력하세요" rows={3} />
            </div>
          </div>
        </div>

        {/* 하단 우측 버튼 */}
        <div className={s.bottomBar}>
          <button className={s.btnGhost}>임시 저장</button>
          <button className={s.btnPrimaryBig}>상품 등록</button>
        </div>
      </div>
  );
}
