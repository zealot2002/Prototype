import React from 'react';

const QicIntroPage: React.FC = () => {
  return (
    <div style={{ padding: 20, background: '#fafcff', minHeight: '100vh' }}>
      {/* Banner/宣传语 */}
      <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#1890ff', textAlign: 'center' }}>
        成交前必做体检，斩断'星期猫'隐患 —— 给你看得见的健康承诺
      </div>
      {/* 核心宣传语 */}
      <div style={{ fontSize: 20, fontWeight: 600, margin: '24px 0 12px 0', textAlign: 'center' }}>
        先体检，后成交：每只猫咪都带'健康通行证'见你
      </div>
      <div style={{ fontSize: 16, color: '#ff4d4f', marginBottom: 24, textAlign: 'center' }}>
        拒绝'盲盒式'买猫！成交前免费体检，让'星期猫'在化验单前无所遁形
      </div>
      {/* 细节版文案 */}
      <div style={{ background: '#f5f5f5', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ fontWeight: 500, marginBottom: 8 }}>你是否担心刚带回家的小猫突然生病？</div>
        <div>我们用'先体检后交易'的铁律，彻底终结'星期猫'噩梦！</div>
        <ul style={{ margin: '12px 0 0 0', paddingLeft: 20 }}>
          <li>✅ 血常规筛查：排查贫血、感染等基础隐患</li>
          <li>✅ 传染病检测：猫瘟、杯状病毒、疱疹病毒（三大致死性传染病）</li>
          <li>✅ 寄生虫检查：粪便镜检 + 体表筛查，杜绝耳螨、滴虫等问题</li>
          <li>✅ 兽医面诊：心脏、呼吸道、皮肤等 12 项可视化健康评估</li>
        </ul>
      </div>
      {/* 成交流程 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>成交流程透明化：</div>
        <ol style={{ paddingLeft: 20 }}>
          <li>选猫</li>
          <li>现场陪同体检（可视频监督）</li>
          <li>出具详细检测报告</li>
          <li>确认健康后付款</li>
        </ol>
      </div>
      {/* 承诺保障 */}
      <div style={{ background: '#e6f7ff', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>承诺：</div>
        <div>若体检发现异常，立即终止交易并全额退还定金；成交后 30 天内出现体检漏检项目相关疾病，无条件退换 + 医疗费用报销。</div>
      </div>
      {/* 痛点场景对比 */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>痛点场景 vs. 我们的解决方案</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', minWidth: 320 }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #eee', padding: 8, background: '#f0f5ff' }}>痛点场景</th>
                <th style={{ border: '1px solid #eee', padding: 8, background: '#f0f5ff' }}>我们的解决方案</th>
                <th style={{ border: '1px solid #eee', padding: 8, background: '#f0f5ff' }}>消费者利益</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #eee', padding: 8 }}>"刚买 3 天就呕吐拉稀，兽医说感染猫瘟"</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>成交前强制体检 + 传染病专项检测</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>避免千元医疗损失 + 情感伤害</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #eee', padding: 8 }}>"卖家说'健康'，回家发现满身耳螨"</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>体表 + 粪便寄生虫双重筛查</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>省去后续驱虫药开销 + 人宠共患风险</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #eee', padding: 8 }}>"买猫时活蹦乱跳，一周后精神萎靡"</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>血常规 + 生化指标预判体质</td>
                <td style={{ border: '1px solid #eee', padding: 8 }}>提前规避先天性疾病隐患</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* 信任背书 */}
      <div style={{ background: '#f6ffed', borderRadius: 12, padding: 16, marginBottom: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>信任强化</div>
        <div>
          所有体检项目均由合作宠物医院出具正规报告（可扫码溯源），支持买家自带猫咪到指定机构复检。<br />
          做交易前，先做'健康把关人'—— 这是我们对每只猫咪的责任，也是对每位铲屎官的承诺。
        </div>
      </div>
      {/* 结尾情感升华 */}
      <div style={{ fontSize: 16, color: '#888', textAlign: 'center', marginTop: 32 }}>
        买猫不是赌运气，而是选择一份长久的陪伴 —— 我们用科学体检为每只猫咪的健康'上保险'，让你抱回家的不仅是毛孩，更是一份踏实的安心。
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <button
          style={{
            background: '#1890ff',
            color: '#fff',
            fontSize: 18,
            fontWeight: 600,
            border: 'none',
            borderRadius: 8,
            padding: '14px 48px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(24,144,255,0.08)'
          }}
          onClick={() => window.location.href = '/appointment'}
        >
          立即预约QIC体检
        </button>
      </div>
    </div>
  );
};

export default QicIntroPage; 