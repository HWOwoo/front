import Link from "next/link";
import s from "./detail.module.css";

export default async function BranchDetailPage({ params }) {
  const { id } = await params;

  const branch = {
    id,
    name: "강남 1호점",
    code: "GANGNAM01",
    manager: "이지원",
    phone: "02-555-1234",
    email: "gangnam01@diclo.kr",
    address: "서울특별시 강남구 테헤란로 123",
    addressDetail: "7층 701호",
    zipcode: "06134",
    hours: "평일: 09:00 - 21:00 주말: 10:00 - 20:00",
    closedDays: "매주 월요일, 공휴일",
    openDate: "2022년 3월 15일",
    status: "활성화",
  };

  return (
      <div className={s.page}>
        {/* 헤더 */}
        <div className={s.header}>
          <div className={s.headerLeft}>
            <h1 className={s.h1}>{branch.name}</h1>
            <div className={s.statusToggle}>
              <span>지점 상태</span>
              <div className={s.toggle}></div>
              <span className={s.statusLabel}>{branch.status}</span>
            </div>
          </div>
          <button className={s.btnPrimary}>지점 정보 수정</button>
        </div>

        {/* 탭 */}
        <div className={s.tabs}>
          <div className={`${s.tab} ${s.tabActive}`}>기본 정보</div>
          <div className={s.tab}>지점 ID/접속키</div>
          <div className={s.tab}>지점 주문 내역</div>
        </div>

        {/* 컨텐츠 */}
        <div className={s.content}>
          {/* 왼쪽 상단 - 지점 기본 정보 */}
          <div className={s.card}>
            <div className={s.cardTitle}>지점 기본 정보</div>
            <div className={s.infoList}>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>지점명</span>
                <span className={s.infoValue}>{branch.name}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>지점 코드</span>
                <span className={s.infoValue}>{branch.code}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>관리자</span>
                <span className={s.infoValue}>{branch.manager}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>연락처</span>
                <span className={s.infoValue}>{branch.phone}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>이메일</span>
                <span className={s.infoValue}>{branch.email}</span>
              </div>
            </div>
          </div>

          {/* 오른쪽 상단 - 위치 정보 */}
          <div className={s.card}>
            <div className={s.locationCard}>
              <div className={s.cardTitle}>위치 정보</div>
              <div className={s.infoList}>
                <div className={s.infoRow}>
                  <span className={s.infoLabel}>주소</span>
                  <span className={s.infoValue}>{branch.address}</span>
                </div>
                <div className={s.infoRow}>
                  <span className={s.infoLabel}>상세 주소</span>
                  <span className={s.infoValue}>{branch.addressDetail}</span>
                </div>
                <div className={s.infoRow}>
                  <span className={s.infoLabel}>우편번호</span>
                  <span className={s.infoValue}>{branch.zipcode}</span>
                </div>
              </div>
              <div className={s.mapPlaceholder}>📍</div>
            </div>
          </div>

          {/* 왼쪽 하단 - 운영 정보 */}
          <div className={s.card}>
            <div className={s.cardTitle}>운영 정보</div>
            <div className={s.infoList}>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>영업 시간</span>
                <span className={s.infoValue}>{branch.hours}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>휴무일</span>
                <span className={s.infoValue}>{branch.closedDays}</span>
              </div>
              <div className={s.infoRow}>
                <span className={s.infoLabel}>개점일</span>
                <span className={s.infoValue}>{branch.openDate}</span>
              </div>
            </div>
          </div>

          {/* 오른쪽 하단 - 지점 요약 */}
          <div className={`${s.card} ${s.summaryCard}`}>
            <div className={s.cardTitle}>지점 요약</div>
            <div className={s.summaryGrid}>
              <div className={s.summaryItem}>
                <div className={s.summaryValue}>NNN</div>
                <div className={s.summaryLabel}>이번달 주문</div>
              </div>
              <div className={s.summaryItem}>
                <div className={s.summaryValue}>NNN</div>
                <div className={s.summaryLabel}>월 매출액</div>
              </div>
              <div className={s.summaryItem}>
                <div className={s.summaryValue}>4.8</div>
                <div className={s.summaryLabel}>방문 평점</div>
              </div>
            </div>
            <div className={s.chartPlaceholder}>
              <div className={s.chartTitle}>월별 주문량 추이</div>
              <div className={s.chartArea}>
                <div className={s.chartLine}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 링크 */}
        <div className={s.footer}>
          <span className={s.footerLabel}>관련 링크</span>
          <div className={s.footerButtons}>
            <Link href="/admin/branches">
              <button className={s.btnSecondary}>지점 목록</button>
            </Link>
            <button className={s.btnSecondary}>전체 주문 리스트</button>
            <button className={s.btnSecondary}>주문 상세</button>
          </div>
        </div>
      </div>
  );
}