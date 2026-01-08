import Link from "next/link";
import s from "./orderDetail.module.css";

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock data
  const order = {
    orderNo: id,
    branch: "강남점",
    branchId: "GN001",
    product: "유기농 플레인 요거트",
    productCode: "P-GN001-100",
    qty: 3,
    price: "12,000원",
    totalPrice: "36,000원",
    orderTime: "2023-06-15 14:30:22",
    status: "완료",
    customerName: "홍길동",
    customerPhone: "010-1234-5678",
    deliveryAddress: "서울시 강남구 테헤란로 123",
    deliveryMemo: "부재 시 문앞에 놓아주세요",
  };

  function getStatusClass(status: string) {
    if (status === "완료") return s.statusComplete;
    if (status === "처리중") return s.statusProcessing;
    if (status === "취소") return s.statusCanceled;
    return "";
  }

  return (
    <div className={s.page}>
      {/* 헤더 */}
      <div className={s.header}>
        <div>
          <h1 className={s.h1}>주문 상세</h1>
          <div className={s.sub}>주문번호: {order.orderNo}</div>
        </div>
        <div className={s.headerActions}>
          <span className={`${s.statusBadge} ${getStatusClass(order.status)}`}>
            {order.status}
          </span>
          <button className={s.btnPrimary}>주문 수정</button>
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className={s.content}>
        {/* 주문 정보 */}
        <div className={s.card}>
          <div className={s.cardTitle}>주문 정보</div>
          <div className={s.infoList}>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>주문번호</span>
              <span className={s.infoValue}>{order.orderNo}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>주문일시</span>
              <span className={s.infoValue}>{order.orderTime}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>주문 상태</span>
              <span className={s.infoValue}>
                <span className={getStatusClass(order.status)}>{order.status}</span>
              </span>
            </div>
          </div>
        </div>

        {/* 지점 정보 */}
        <div className={s.card}>
          <div className={s.cardTitle}>지점 정보</div>
          <div className={s.infoList}>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>지점명</span>
              <span className={s.infoValue}>
                <Link href={`/admin/branches/${order.branchId}`} className={s.link}>
                  {order.branch}
                </Link>
              </span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>지점 ID</span>
              <span className={s.infoValue}>{order.branchId}</span>
            </div>
          </div>
        </div>

        {/* 상품 정보 */}
        <div className={s.card}>
          <div className={s.cardTitle}>상품 정보</div>
          <div className={s.infoList}>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>상품명</span>
              <span className={s.infoValue}>{order.product}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>상품코드</span>
              <span className={s.infoValue}>{order.productCode}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>수량</span>
              <span className={s.infoValue}>{order.qty}개</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>단가</span>
              <span className={s.infoValue}>{order.price}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>총 금액</span>
              <span className={s.infoValue}>
                <strong>{order.totalPrice}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 고객 정보 */}
        <div className={s.card}>
          <div className={s.cardTitle}>고객 정보</div>
          <div className={s.infoList}>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>고객명</span>
              <span className={s.infoValue}>{order.customerName}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>연락처</span>
              <span className={s.infoValue}>{order.customerPhone}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>배송 주소</span>
              <span className={s.infoValue}>{order.deliveryAddress}</span>
            </div>
            <div className={s.infoRow}>
              <span className={s.infoLabel}>배송 메모</span>
              <span className={s.infoValue}>{order.deliveryMemo}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className={s.footer}>
        <Link href="/admin/orders">
          <button className={s.btnSecondary}>목록으로</button>
        </Link>
        <div className={s.footerActions}>
          <button className={s.btnDanger}>주문 취소</button>
          <button className={s.btnPrimary}>주문 완료 처리</button>
        </div>
      </div>
    </div>
  );
}
