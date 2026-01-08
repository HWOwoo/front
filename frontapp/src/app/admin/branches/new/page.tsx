import Link from "next/link";
import { Input } from "../../../component/ui/ui";
import s from "./new.module.css";

export default function NewBranchPage() {
  return (
      <div className={s.page}>
        <div>
          <h1 className={s.h1}>신규 지점 생성</h1>
          <p className={s.desc}>새로운 지점 정보를 입력하여 등록하세요.</p>
        </div>

        <div className={s.content}>
          {/* 왼쪽 폼 영역 */}
          <div className={s.formCard}>
            <div className={s.form}>
              <div className={s.field}>
                <label className={s.label}>지점명</label>
                <Input placeholder="지점명을 입력하세요" />
              </div>

              <div className={s.field}>
                <label className={s.label}>담당자명</label>
                <Input placeholder="담당자 이름을 입력하세요" />
              </div>

              <div className={s.field}>
                <label className={s.label}>연락처</label>
                <Input placeholder="연락처를 입력하세요 (예: 010-1234-5678)" />
              </div>

              <div className={s.field}>
                <label className={s.label}>주소</label>
                <Input placeholder="주소를 입력하세요" />
                <Input placeholder="상세 주소를 입력하세요" style={{ marginTop: 8 }} />
              </div>

              <div className={s.field}>
                <label className={s.label}>메모</label>
                <textarea
                    className={s.textarea}
                    placeholder="추가 정보를 입력하세요"
                />
              </div>

              <div className={s.field}>
                <label className={s.label}>상태</label>
                <div className={s.radioGroup}>
                  <label><input type="radio" name="status" defaultChecked /> 운영중</label>
                  <label><input type="radio" name="status" /> 휴업중</label>
                  <label><input type="radio" name="status" /> 폐점</label>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 안내 영역 */}
          <div className={s.sidebar}>
            <div className={s.infoBox}>
              <div className={s.infoTitle}>
                ℹ️ 지점 ID 안내
              </div>
              <p className={s.infoDesc}>
                지점 생성이 완료되면 시스템에서 자동으로 고유한 지점 ID가 발급됩니다.
              </p>
              <div className={s.idPreview}>
                <div className={s.idPreviewLabel}>지점 ID 예시</div>
                <div className={s.idPreviewValue}>BR_23120001 🔗</div>
              </div>
            </div>

            <div className={s.guideBox}>
              <div className={s.guideTitle}>지점 ID 안내사항</div>
              <div className={s.guideList}>
                <div className={s.guideItem}>
                  <span className={s.guideIcon}>✓</span>
                  <span>지점 ID는 시스템에서 자동 생성되는 고유값입니다.</span>
                </div>
                <div className={s.guideItem}>
                  <span className={s.guideIcon}>✓</span>
                  <span>지점 ID는 변경이 불가능하며 영구적으로 사용됩니다.</span>
                </div>
                <div className={s.guideItem}>
                  <span className={s.guideIcon}>✓</span>
                  <span>지점 생성 후 상세 페이지에서 접속키를 발급받을 수 있습니다.</span>
                </div>
              </div>
              <div className={s.warningBox}>
                <span className={s.warningIcon}>⚠️</span>
                <span className={s.warningText}>
                지점 정보는 생성 후에도 수정이 가능하지만, 지점 ID는 변경할 수 없습니다.
              </span>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className={s.actions}>
          <Link href="/admin/branches">
            <button className={s.btnSecondary}>취소</button>
          </Link>
          <button className={s.btnPrimary}>저장</button>
        </div>
      </div>
  );
}