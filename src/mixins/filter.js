import config from '@/api/config';
import { formatDate, formatTime, formatPrice, validDate, thousandOfCharacters } from '@/common/js/utils'
export default {
  data() {
    return {}
  },
  filters: {
    getImgUrl(val) {
      if (val) {
        if (val.indexOf('http') > -1) {
          return val;
        }
        return config.upfileBaseUrl + val + '_0x0';
      }
      return '';
    },
    validDate,
    formatDate,
    formatTime,
    formatPrice,
    thousandOfCharacters
  }
}
