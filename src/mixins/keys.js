export default {
  data() {
    return {
      priceKeyList: [
        "MainStone1GramPrice", "MainStone1TotalPrice",
        "MainStone2GramPrice","MainStone2TotalPrice",
        "MainStone3GramPrice","MainStone3TotalPrice",
        "SubStone1GramPrice", "SubStone2GramPrice",
        "SubStone1TotalPrice", "SubStone2TotalPrice",
        "CostGoldPrice", "GoldPrice", "CostTotalWorkFee", "CertificateFee", "PartsFee", "OtherFee",
        "LabelingFee", "CostTotalPrice", "StoreCost", "LabelPrice", "LabelFee", 
        "TotalStoreCost", "TotalLabelPrice", "TotalLabelFee", "GramLabelingFee", "TotalLabelingFee", 
        "GramFee", "UnitFee", "LabelGramFee", "LabelWorkFee", "DeductibleAmount", "ReceivingAmount", "SaleGramFee", "ActualSalesWorkFee", 
        "ActualSalesGramFee", "DeductedPointsAmount", "ExchangeDeduction", "LowestCostPrice", "HighestCostPrice", 
        "AmountReceivable", "ActualWorkFee", "ActualSellingPrice", "EraseAmount", "AmountReceived", "DepositAmount",
        "ReceivingAmount1", "ReceivingAmount2", "ReceivingAmount3", "TotalCostPrice", "EstimatePrice", "ActualSalesAmount", 
        "SaleWorkFee", "SaleGramWorkFee", "SaleGoldPrice", "RecycleGoldPrice", "TotalRecycleAmount", "RecycleAmount", "DeductionAmount", "TotalDeductionAmount", 
        "ServiceFee", "TotalServiceFee", "PurificationFee", "TotalPurificationFee", "GramWeight", "TotalGramWeight",
        "CostPrice", "OldDecorationAmount", "OldMaterialAmount", "OrderAmount", "DeductionWorkFee", "OldMaterialDeductionWorkFee", "OldDecorationDeductionWorkFee",
        "DeductionAmount"
      ], // 金额
      ctWeightKeyList: [
        "TotalStoneWeight",
        "MainStone1TotalWeight", "MainStone2TotalWeight", "MainStone3TotalWeight","SubStone1TotalWeight", "SubStone2TotalWeight"
      ], // 克拉重
      gWeightKeyList: ["TotalGoldWeight", "TotalWeight", "GoldWeight", "CuttingWeight", "OutTotalGoldWeight", "OutTotalWeight", "InTotalWeight", "InTotalGoldWeight", "LossGramWeight"], // 克重
      quantityKeyList: [
        "Quantity", "TotalNumber", "ReceiveQuantity", "OutQuantity", "InQuantity", 
        "MainStone1Num", "MainStone2Num", "MainStone3Num", "SubStone1Num", "SubStone2Num",
        "InventoryQuantity", "InventoryLossQuantity", "InventoryGainQuantity",
      ], // 件数
      integralKeyList: ["OrderPoints", "ProductPoints", "DeductIntegral", "Integral", "DeductedPoints", "DeductionPoints"] // 积分
    }
  },
  computed: {
    thousandKeyList() {
      return [...this.priceKeyList, ...this.ctWeightKeyList, ...this.gWeightKeyList, ...this.quantityKeyList, ...this.integralKeyList];
    }
  }
}
