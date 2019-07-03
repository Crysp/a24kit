"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

var styled_1 = __importDefault(require("./styled"));

var placeholder =
/* eslint-disable max-len */
'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc0cHgiIGhlaWdod' + 'D0iMTc0cHgiIHZpZXdCb3g9IjAgMCAxNzQgMTc0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1s' + 'bnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSB' + 'odHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+OCBTdXBwbGVtZW50czwvdGl0bGU+CiAgICA8ZGVzYz' + '5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoP' + 'SIxNzYiIGhlaWdodD0iMTc2Ij48L3JlY3Q+CiAgICAgICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4tMiIgcGF0dGVyblVuaXRzPSJvYmplY3RCb3Vu' + 'ZGluZ0JveCIgeD0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS0zIiB' + '0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIj48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS0zIiB3aW' + 'R0aD0iMzUyIiBoZWlnaHQ9IjM1MiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFXQ' + 'UFBQUZnQ0FZQUFBQ0ZZYU5NQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBR3RkSlJFRlVlQUh0M1Z0WDFNcld4dkdvaUNmQTQ3cFkzLytUZWJWdlZN' + 'UURLQWkrYS9aK2UyMUVpRWs2bGN4S2ZobWpCM1FuTld2bS95UlBWeXFWNm50djM3NzkyVmdRUUFBQkJDWW5jSC95R2xXSUFBSUlJTEFoc0xmbDh' + 'QZmZmMi8vOVJjQkJCQkFvQ0NCLy96blA1dm9Xc0FGSVF1TkFBSUl0QkZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0xRUllNQnRkS3hEQUFFRU' + 'NoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1BQVFRS0VtREFCZUVLalFBQ0NMUVJZTUJ0ZEt4R' + 'EFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3RzEwckVNQUFRUUtFbURBQmVFS2pRQUNDTFFSWU1C' + 'dGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0QkZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0x' + 'RUllNQnRkS3hEQUFFRUNoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1BQVFRS0VtREFCZUVLal' + 'FBQ0NMUVJZTUJ0ZEt4REFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3RzEwckVNQUFRUUtFbURBQ' + 'mVFS2pRQUNDTFFSWU1CdGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0QkZnd0cxMHJFTUFBUVFL' + 'RW1EQUJlRUtqUUFDQ0xRUllNQnRkS3hEQUFFRUNoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1' + 'BQVFRS0VtREFCZUVLalFBQ0NMUVJZTUJ0ZEt4REFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3Rz' + 'EwckVNQUFRUUtFbURBQmVFS2pRQUNDTFFSWU1CdGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0Q' + 'kZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0xRUjJHdGJhUjBDQ05SRjROdTNiODMzNzkrYjgvUHo1dXJxcW5uNDhHRnpjSERRN08vdjE3VWpL' + 'OG1XQWE5RWFMdTVUQUpoc2x2VERlUDkrZlBuTHpzYW44WHI5ZXZYVFBnWE1qbmVNT0FjT3NnQ2djNEVMaTR1TnFZYXhodi9kMWxPVGs2YXYvNzZ' + 'xOHVtdHBtUUFBT2VFTGFxRUJoQ0lGcTUwYVd3YmMxZVhsNzJEdlBqeDQ4bXlqMTQ4S0IzV1FYS0VXREE1ZGlLak1BZ0F0R05FSWE3TmQydXJkdy' + '9WUlpHem9EL1JHbmE5UXg0V3Q1cXUwRWdXbVpoRE51LzI5WmRtTkQyRlVYdTNidlgzTC8vMzBFNzhmL04xM2FiMno2L3VlNzYrL2gvaW1XN0wvR' + 'TM5bmY3Ti82UFYrejNsa093S0xGcytaV0lMZVl3QWd4NEdEZWxCaENJbHR6TjE0QXd4WXFFZVcrWHUvNlA5ZGZYaFpGZVg3YnZiLzY5dnMxYy8x' + 'L1BlNjRjMVBzckFRYjhLdy92UmlRUUpoU1gwWEd6S0Y3UndzdThiRTB6Y3J6K2YrYWMrK1NtQmR5SDFqVGJNdUJwT0srcWxyaUUvdnIxYTNOMmR' + 'yWklJNnRSVE9hYlV6VUduRk9YS3JPSzF1NlhMMTgyZCt1cjNJRUZKKzNtVzA1eEdYQk9YYXJLS3JvV1BuMzZ0R254VnBYNGlwTGQyM09xWjVTYk' + 'tobFZxU2luMDlQVDV2UG56K243ZHl0Q1dpUlZCbHdFNjg1QkdmRE9DTmNiSUo2dUNnTzI1Q2NRYzBKWThoRmd3UGswcVNLajQrUGp6Y2lHS3BLV' + 'jVHWlNIaGp5RVdEQStUUkpuOUdIRHgvY2FFdXYwdjhTak80SG95RCt4eVBUZitZRHpxUkdCYmtZNVZDQlNEZFNOQlhsRFNDSjNqTGdSR0prVHlX' + 'ZVlvc2JicGE2Q0REZ3ZIcnBnc2lyemV5WnhkTmcxK2RvaUljckxQVVJlUFRvVVgxSnJ5UmpCcndTb2J2czVuWUdydTE4RGR1SmNicVV0VTFPQWp' + 'INlFmOXZUbTBpS3dhY1Y1dEpNb3ZIaFdPZTJaaXJZWW56SDB3Q01YRWxqeDgvVHB5ZDFCandDbytCNkZhSThidGh2dGtueUZtaFBLUHU4cE1uVD' + 'BhTko5aTRCQmp3dUR4VFI0c3VoYmlKRnNacldUNkI2SDR3QjBSdW5SbHdibjFHeVM2NkZtS3VCayt0allLem1pQlBuejZ0SnRlMUpzcUFGNjU4O' + 'U8vR0k4TnVxQzFjNkJ1N0Y1T3Y2Lys5QVNYaFd3YWNVSlN4VWpKWHcxZ2s2NHNUZmI5R1ArVFhqUUhuMTZoM2huRmpMZVpxaUdGbGxuVVMwUDFR' + 'aCs0TXVBNmRPbWNaSXh4aXJnWmREcDJSTFc3RGVQTE43R2QxeU9wUjVEcDA2cFFsOCsyRWFmRWJIUjBkTFg0Zmw3S0RESGdoU2pMZmhRaTU0Mjd' + 'FWThkYXZ6dENuTEE0QTU0UWRxbXFZcGhaOVBucWRpaEZ1SjY0aDRlSDlTUXIwNFlCTCtBZ0NQT05GckJsM1FUaXhwdldiMTNIQUFPdVM2L2Zzbz' + 'BuMjJLc3IyWGRCR0xJbWRadmZjY0FBNjVQczM4empsbkxZb0owQ3dKeDQ4MjQzL3FPQXdaY24yYi9aaHdQV2xnUUNBTE10ODdqZ0FIWHFkdW01U' + 'nN0WUFzQ1FTQytqRTBuV3QreHdJRHIwMnd6aGFTdWh3cUZLNWp5ZHFhN2dsVUlYWUFBQXk0QXRYVElNRit0bmRLVTY0c2ZQeGxsZnVlNmRHUEFk' + 'ZW0xT2NGTUsxbVphQk9tNjhwb1F0Z2pWTVdBUjRBNFpZaVlURjNyZDByaWRkWGx5N2t1dlJod1hYcVpWTDB5dmFaT043NmM0L2Y5TEhVUVlNQjE' + '2TFRKTWg2NDhNUmJSWUxObEtxZm5Kb0ovSUJxR2ZBQWFITVYwYktaaTN4ZDlYb3lzaDY5R0hBOVdybTByRWlyT1ZPTmJnaGp4T2RVb0h2ZERMZz' + 'dxMW0zakJQS0VLTlpKYWlxY2daY2gxd011QTZkVExoVGlVNVowalExYVJZbDJ2Tmd3TzE4MHF6Vm9ra2pSUldKTU9BcVpESWZjQjB5Tlg1Z3N4Y' + 'WhrdVRKZ0pNSThZYzB0SUQvQUNqRDZqaVo5UDltVUtLZUhCaHdIVm94NEFwMGNqSlZJRkt5RkIwenlRUzVJeDBHZkFlWVRCOTcrQ0tUR3ZYazRw' + 'SDEvRm94NFB3YStiSE5DalRLbUNJRHpxaktyemt4NEY5NXBIeW4vemVsTEpKQ1lHY0NESGhuaE9VRE1PRHlqSmRZZ3had2ZsVVpjSDZOVEQ5Wmd' + 'VWVpVMlRBR1ZYNU5TY0cvQ3VQbE8rY1NDbGxrUlFDT3hOZ3dEc2pMQitBQVpkbnZNUWE3dDI3dDhUZFd0UStNZUFLNVBTVDR4V0lsREJGeDAxQ1' + 'VXNmt4SUJ2QU1uNDlzR0RCeG5Ua2xOeUFsckF5UVg2SnowR25GK2p4b2xVZ1VqSlV2U2xuVXlRTzlKaHdIZUF5ZlN4UzhsTWF0U1JpMk9tRXAzc' + 'VNIUGRXVHFaMXEzL2tMMTN6QXloTm4wWkxlRHBtZmV1MGNuVUc5bnFDemhtNmpnRUdIQUZPam1aS2hBcFdZcU9tV1NDM0pFT0E3NERUS2FQM1lU' + 'THBFWWR1VERnU25TcUk4MTFaK21POXJyMUg3TDNESGdJdGVuTGFBRlB6N3gzalU2bTNzaFdYOEF4VThjaHdJRHIwTWxZNEVwMHlwS21xNllzU3J' + 'UbndZRGIrYVJacTBXVFJvb3FFbkhmb0FxWlBBbFhoMHovUExKNDMzZGxMVnBseUZNTE9JTUtmODdCV2YxblJpbTJZTUFwWktnbUNTM2dPcVJpd0' + 'JYb2RINSs3bmZoS3RBcFU0b25KeWZOeGNWRnBwVGtjZ3VCdlZzKzgxRVNBbWRuWjgzWHIxK2RTRW4wcUNtTjA5UFRKbDc3Ky92TjBkRlI4L0Rod' + 'zVyU1gwMnVERGloMU5GeTBZSkpLRXlGS2NYVjA3dDM3NXFuVDU4Mmg0ZUg3aVVrMDVBQkp4SWtmdm5pMDZkUG01WkxvclNrc2dBQzBScis5dTFi' + 'OCtMRmkrYlJvMGNMMktObDdJSSs0Q1E2eGk4ZnYzLy9udmttMFdPSmFjUXg5dUhEaDAyMzFoTDNyOFo5MGdKT29OcVBIejgySjhibDVXV0NiS1N' + '3ZEFKeGxSVlhXd2NIQjB2ZjFmVDd4NEJubGlqNmU2UGw2NGMzWnhaaVpkVi8vdng1MHg4Y2ZjT1crUWpvZ3BpUGZST1hoTWZIeDh4M1JnM1dYTF' + 'VidmZPcno0Qm4xT0RqeDQvRzk4N0lYOVhOWnJRTkR2TVJZTUF6c1k4eHZ0Ky9mNStwZHRVaThGOEMwUVVXWTgwdDh4Qmd3UE53YjZJUHpvSkFCZ' + '0lNZUQ0VkdQQU03S1AxYThURERPQlZlU3VCT0Jiam1MUk1UNEFCVDgvY1dOOFptS3V5blVBOHBHR1puZ0FEbnBoNUREZUx4ME10Q0dRaTRIN0VQ' + 'R293NEltNU05K0pnYXV1RTRGb0dNUURRWlpwQ1REZ2FYazd5Q2ZtcmJydUJOeVg2TTVxckMwWjhGZ2tPOGJSeXVnSXltYVRFNGdIZ3l6VEVtREE' + 'wL0pXR3dKcENYZ2NmbnBwR1BEMHpOV0lBQUlJYkFndzRJa1BCTC9WTlRGdzFYVW00SWM4TzZNYWJVTUdQQnJLYm9IOHVHWTNUcmFhbm9CamN3Ym' + '0wMWU1N2hyMzlzd0F1dTRqSU8vZSs5MjQ2YlhSQXA2WU9RT2VHTGpxT2hGZ3ZwMHdqYjRSQXg0ZGFYdkFNR0I5YmUyTXJKMmVRUHg2c21WNkFne' + 'DRldVorRkhFRzVxcHNKK0NIT3R2NWxGckxnRXVSYlluNytQSGpsclZXSVRBdGdiajV4b0NuWmI2dGpRRnZTVXo0Tnc1MmQ1d25CSzZxVmdJYUJL' + 'MTRpcTVrd0VYeDNoMzh5Wk1uZDYrMEJvRUpDZmhoemdsaDM2aUtBZDhBTXRYYlo4K2VUVldWZWhDNGswRGNmRE1DNGs0OHhWY3c0T0tJYjY4Z1J' + 'rSm9CZC9PeHFmVEVUZzRPSml1TWpYOVJvQUIvNFprdWcrMGdxZGpyYWJmQ1VUTDE4MjMzN2xNK1FrRG5wTDJqYnJpQkhBRDVBWVVieWNqb1BVN0' + 'dlbzdLMkxBZDZLWlpzWGg0ZUUwRmFrRmdXc0VmUGxmZ3pIanZ3eDRSdmhSZFR3WjV5NzB6Q0tzc1Bxam82TVY3blcrWFdiQUNUU0pWckJwS2hNS' + 'XNaSVU0dWF2UjQ5emlNMkFFK2dRRDJWb2tTUVFZZ1VwT05aeWljeUFrK2dSM1JER1l5WVJZOEZweE5XV3B6RHpDTXlBODJqUlBILytQRkUyVWxr' + 'YWdlaDJjTDhobDZvTU9KRWUwUUxXRlpGSWtBV2xFdmNZZk1IbkU1UUJKOU1rSHM0d09ENlpLQXRJSjh6WGp3SGtFNUlCNTlPa2VmSGloVW5iRSt' + 'wU2EwcnhwZTZ4OTV6cU1lQ0V1c1JOa3Bjdlh4cWFsbENiMmxLS3F5bmRXbmxWWThCSnRZbis0R2dKV3hBWVNpQW1mSElNRGFVM1RUa0dQQTNuUW' + 'JYRVBCRnVuQXhDdC9wQ2NSWDE2dFVyUTg2U0h3a01PTGxBTVd6SUpXUnlrWktsRitiNyt2VnJOOTJTNlhKYk9nejROaXJKUG91YktGckN5VVJKb' + 'XM2MjVXdkVRMUtCYnFURmdHOEF5Zm8yV3NKTU9LczZPZkxhbXE4bktuUG8wU1dMdlM0YjJTWUhnVERoR0ZCL2NuTFMvUHo1TTBkU3NraEJJRXcz' + 'UnM3RWpUZExQUVFZY0QxYWJUS044Wnh4ZVhsOGZOeGNYbDVXbHIxMFN4Q0ltN1V4MnNHTWVpWG9sbzJwQzZJczN5TFJvN1h6NXMwYlV3b1dvVnR' + 'YMEpoY3g1anh1alM3bnEwVzhIVWFGZjIvdmRQOTlldlg1dlBuejdva0t0SnVqRlRqS2loYXZmcDd4NkE1WHd3R1BCLzdVV3JlemgzeDhlUEg1dU' + 'xpWXBTWWd1UW1FSnFieEQrM1JsMnpZOEJkU1NYZUxscEQwU1Z4ZG5hMmFRM3JHMDRzMWc2cHhYU1NNU1pjcTNjSGlNbUtNdUJrZ3V5U1R0eWdpO' + 'WZwNmVuR2lLK3VybllKcDJ3U0FuRnpMWjVxOHpOQ1NRUVpNUTAzNFVhRW1TVlVERmN6KzFVV05YYlBJeWJVWWI2N2M4d1lnUUZuVkdXRW5Nd3BQ' + 'QUxFSkNGb21VU0lBbWt3NEFKUU00VFVZc3Fnd2pnNTBISWNqaG1qTU9DTXFveVFVL1FidWxrekFzaVpROFJ3US9NNnpDeEN3ZW9aY0VHNGM0ZDI' + '2VHEzQXJ2WFQ4UGRHV2FPd0lBenE3TmpiazdlSFFFbUtFN0RCQ0lVVElFQkY0UTdkK2pvTzR4TFdFdWRCS0liS2VaNXNDeVhnTE56dWRwdTlzd0' + 'pYSy9BMGZvMXdVNjkrblhKbkFGM29WVHhOaTVoNnhYUGwyZTkyblhObkFGM0pWWHBkZ3k0VXVIK1Nac0IxNnRkMTh3WmNGZFNsVzRYbDdEeFpKe' + 'WxMZ0xieWZmcnlscTJmUWt3NEw3RUt0eWVBZGNuR3MzcTAyeEl4Z3g0Q0xYS3lzUURHUjdLcUVlMDZEYWlWejE2N1pJcEE5NkZYa1ZsWS81WVN4' + 'MEVEZzRPNmtoVWxqc1RZTUE3STZ3alFMU3EzTlRKcjFWb1pPNkgvRHFObFNFREhvdGtCWEcwZ3ZPTEZCT3VXOVpEZ0FHdlIrdk5wQzVNT0svZzB' + 'mWGdaK1h6NmxNaU13WmNnbXJpbUhHU3U4R1RUNkRReEpkalBsMUtaOFNBU3hOT0dOL1BtT2NUSlg3aDJMSStBZ3g0ZlpwdkxuT2ZQMysrd2ozUH' + 'VjdWhoVGwvYzJwVE9pc0dYSnB3MHZqeG0zR0dPODB2VG94NjhOREYvRHJNbFFFRG5vdDhnbnFqejlHUGQ4NG5SUFQ3Nm5xWWozK0dtaGx3QmhWb' + 'XpDRU13RTI1NlFXSWVacjF4VS9QUFZ1TkREaWJJalBrOCtyVkt5WThJZmVZSUNtWUczSTJJZlNrVlRIZ3BNSk1tVmEweHNJUTNBaWFobnEwZkYx' + 'MVRNTTZleTBNT0x0Q0UrVVhKdno2OVdzbVhKaDNtSzg1bWd0RHJpZzhBNjVJck5LcGFnbVhKUnpEemN6SFVaWnhiZEVaY0cyS0ZjNDMraVdqSmV' + '3U2VWelFjYlBUY0xOeG1TNGhHZ05lZ29vajc4TzJPOEtsOGpoZ285dkJjTDl4V0M0dENnTmVtcUlqN2MvMlRyMVcyM0NnVzRhNkhZWXpYSHBKQn' + 'J4MGhYZmN2K2kzOU5oeWY0amJyaHhYRWYzWnJhbkUzcHAyMXI0T0l4Q3Q0QmlpZG54ODNGeGRYUTBMc3FKU01hRjZkRHRFVjQ0RmdUWUNqcEEyT' + '3RiOVN5Qk01YzJiTjI3Ty9Vdms5bi9peXlwdVlqTGYyL240OUZjQ0RQaFhIdDYxRUlqTDZqQmgvY0szUTlKZGN6c1huOTVOUUJmRTNXeXN1WU5B' + 'R0UwTVV6czVPYmxqaTNWOXZCMC9iZWpldW5RZlkyKzFnTWVndU1JWTBRcCs5dXpaQ3ZmODkxM1dOZk03RTU5MEk4Q0F1M0d5RlFLM0VvaWhaaWJ' + 'WdVJXTkR6c1FZTUFkSU5rRUFRUVFLRUdBQVplZ0tpWUNDQ0RRZ1FBRDdnREpKZ2dnZ0VBSkFneTRCRlV4RVVBQWdRNEVHSEFIU0RaQkFBRUVTaE' + 'Jnd0NXb2lva0FBZ2gwSU1DQU8wQ3lDUUlJSUZDQ0FBTXVRVlZNQkJCQW9BTUJCdHdCa2swUVFBQ0JFZ1FZY0FtcVlpS0FBQUlkQ0REZ0RwQnNnZ' + '0FDQ0pRZ3dJQkxVQlVUQVFRUTZFQ0FBWGVBWkJNRUVFQ2dCQUVHWElLcW1BZ2dnRUFIQWd5NEF5U2JJSUFBQWlVSU1PQVNWTVZFQUFFRU9oQmd3' + 'QjBnMlFRQkJCQW9RWUFCbDZBcUpnSUlJTkNCQUFQdUFNa21DQ0NBUUFrQ0RMZ0VWVEVSUUFDQkRnUVljQWRJTmtFQUFRUktFR0RBSmFpS2lRQUN' + 'DSFFnd0lBN1FMSUpBZ2dnVUlJQUF5NUJWVXdFRUVDZ0F3RUczQUdTVFJCQUFJRVNCQmh3Q2FwaUlvQUFBaDBJTU9BT2tHeUNBQUlJbENEQWdFdF' + 'FGUk1CQkJEb1FJQUJkNEJrRXdRUVFLQUVBUVpjZ3FxWUNDQ0FRQWNDRExnREpKc2dnQUFDSlFndzRCSlV4VVFBQVFRNkVHREFIU0RaQkFFRUVDa' + 'EJnQUdYb0NvbUFnZ2cwSUVBQSs0QXlTWUlJSUJBQ1FJTXVBUlZNUkZBQUlFT0JCaHdCMGcyUVFBQkJFb1FZTUFscUlxSkFBSUlkQ0RBZ0R0QXNn' + 'a0NDQ0JRZ2dBRExrRjFCVEV2THkrYmVGbWE1dUxpQWdZRUJoSFlHMVJLb2RVUkNMTTlQei9mdkw1Ly84NTgvLzhJK1BuelovUHUzYnZtL3YzN3p' + 'mNytmdlBvMGFQTjM3MDlwOWJxVHBJQk8rd29HUUJ0TFVYQ2RMOTkrOWFjbloxcDVmMUI5S3VycXcycjRCWExnd2NQbXNlUEh6ZFBuanhwSGo1OC' + 'tJZlNWcStWQUFOZXEvSjM3SGNZU1JndTA3MERVTWVQNDh2cjY5ZXZteGN6N2dodGhac3g0QldLZnRzdVI3ZkM2ZW5wcGhWMzIzcWZEU2R3M1l5a' + 'k5mejA2ZE5OeS9qZXZYdkRneXE1Q0FJTWVCRXlEdHVKYU8yRzZjWXJUTUpTbmtEY3NEczVPV2srZmZxME1lRm56NTQxK292TGM4OWFBd1BPcWt6' + 'QnZINzgrTEc1Tkk1dWhyaUpaSm1lUUhEZmZ2bEZYM0VZY2R6RXM2eUxBQU5la2Q3Uit2cnk1WXR1aG1TYXg0MjdlRVgzeE1IQndlYm1YYklVcFZ' + 'PSUFBTXVCRFpUMkREZXo1OC9OOUhQYThsTElIUTZQajVteEhrbEdqMHpCanc2MGp3QjQ0U092c1lZdjJ1cGh3QWpya2VyWFRObHdMc1NURmcrVG' + '1CZERRbUY2Wm5TZFNOKy92eTU4Y1E5K2RXd09RT3VRYVdPT2NaSWhqRGV1TGxqV1E2Qk1PSjQyaTV1MWgwZUhobzFzUnhwR3dhOEFESGpqbm9NK' + '2cvek5hcGhBWUxlc1F2Ym0zVXhZaUtNMkRqaU8wQlY5REVEcmtpczIxS05vV1J4ZzgwNDN0dm9MUE96K0xJTjNZK09qalpqaVplNWwrdllLd1pj' + 'a2M1aHNuRTVHdU40NDIrOEdHOUZBbzZZYWp4RTgvSGp4ODJYYnd4ZmkxYzgwQkYvNDlGblN4MEVHSEJpbmNKY1kraFlHSzBaeUJJTE5XTnFjWXp' + 'FYXpzSlVLUVNCaHdQZFd4bloyUElNd3IwaDZvWjhCOEFUYjE2ZXpLWkRHZHE4c3VwTDQ2aE9IN2lGVXUwaW1OV3RyaUp4NHh6NmN5QWsrZ1JMWm' + 'pvMnpObU40a2dDMHBqMjEwVlk4S2pWUnczOGNLTUxmTVRZTUF6YXhCRHhzSjRvMS9YZ2tCcEF0dEo5YU8vT0l3NFptYXp6RWVBQWMvRVBpNFBqV' + 'jZZQ2I1cU4xLzRNU3RiREYyTUlXM1JSV0dabmdBRG5waDVYQTdHZ1I5L0xRak1UU0Q2aTJNMFJWeUZlZHB1ZWpYOEtPZUV6S08xRVU4ME1kOEpv' + 'YXVxRTRFNEp1UFlqR1BVTWgwQkxlQUpXRWNySTJhNVlyd1R3RmJGVGdTaVd5eHVDTDk4K2RLSWlaMUlkaXVzQmR5TjArQ3R3blRmdjMvUGZBY1R' + 'WSEJxQW83WjZZZ3o0SUtzNCtHSk1OOW9BVnNRcUlsQUhMTng3SnBEdXF4cURMZ1Ezemh3UDN6NFlIS2NRbnlGTFU4Z0puYUtZNWdKbDJQTmdBdX' + 'dqVXU0NlBPMUlMQUVBdTVmbEZPUkFZL01OaDZvaUVzMzAwS09ERmE0MlFqRXNSekh0SWVGeHBlQUFZL01OTVpVTXQrUm9RbzNPNEU0cHVQWXRve' + 'ExnQUdQeU5NREZpUENGQ29kZ2VoYWkyUGNNaDRCQmp3U3l4Zzc2YWVBUm9JcFRGb0NjWXhmbi9veWJhS1ZKTWFBUnhJcVpwcXlJTEFHQW83MThW' + 'Um13Q093TktuT0NCQ0ZxSVpBakJHT1k5NnlPd0VHdkNQRCtHa1l6OC92Q0ZIeDZnakVNUi9Idm1VM0FneDROMzdNZDBkK2l0ZExRTU5qZCswWTh' + 'BNE1ZMmlPRzI4N0FGUzBhZ0p4N0J0eXVadUVESGdIZmc3QUhlQXBXajBCRFpEZEpXVEFPekRjL3VqaERpRVVSYUJxQXM2QjNlUmp3QVA1eGFEMG' + 'VGa1FXRE1CNThGdTZqUGdnZng4OHc4RXA5amlDRGdYaGt2S2dBZXlNMFhmUUhDS0xZNkFjMkc0cEF4NEFMc1lpRzVtcUFIZ0ZGa2tnVGdYL09qQ' + 'U1Ha1o4QUJ1dnZFSFFGTmswUVNjRThQa1pjQUR1SjJmbnc4b3BRZ0N5eVhnbkJpbUxRTWV3TTNvaHdIUUZGazBBZWZFTUhrWjhBQnUrbjhIUUZO' + 'azBRU2NFOFBrWmNBOXVmbW03d25NNXFzaDROem9MelVEN3NuTU4zMVBZRFpmRFFIblJuK3BHWEJQWm9iYjlBUm04OVVRY0c3MGw1b0I5MlRtSU9' + 'zSnpPYXJJZURjNkM4MUErN0p6Q1RVUFlIWmZEVUVuQnY5cFdiQVBabjVsdThKek9hckllRGM2QzgxQSs3SnpMZDhUMkEyWHcwQjUwWi9xUmx3VD' + 'JaK0FhQW5NSnV2aG9Cem83L1VETGduTXdkWlQyQTJYdzBCNTBaL3FSbHdmMlpLSUlBQUFxTVFZTUE5TWZxVzd3bk01cXNoNE56b0x6VUQ3czlNQ' + '1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBK' + 'TU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWd' + 'DQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3' + 'g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQ' + 'UVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3' + 'czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdIdGl2SDhmc3A3SWJMNFNBczZOL2tKems1N005dmYzZTVhd09RTHJ' + 'JT0RjNksvenZiZHYzLzdzWDB3SkJCQkFBSUZkQ1dnQjcwcFFlUVFRUUdBZ2dmOERvTEVXWUxUb2Q2c0FBQUFBU1VWT1JLNUNZSUk9Ij48L2ltYW' + 'dlPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlVJLUtpdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtc' + 'nVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjgtU3VwcGxlbWVudHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODcuMDAwMDAwLCAtMTky' + 'MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InBhZ2luYXRpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTgwMy4wMDA' + 'wMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM2LjAwMDAwMCwgMTE3LjAwMDAwMCkiPg' + 'ogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJNYXNrIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJ1cmwoI3BhdHRlcm4tM' + 'ikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0' + 'cm9rZT0iI0UxRTFFMSIgc3Ryb2tlLXdpZHRoPSIxIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE3NSIgaGVpZ2h0PSIxNzUiPjwvcmVjdD4KICA' + 'gICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cj' + 'wvc3ZnPg=='
/* eslint-enable max-len */
;
/**
 * @develop
 */

var Avatar =
/** @class */
function (_super) {
  __extends(Avatar, _super);

  function Avatar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Avatar.prototype.render = function () {
    var _a = this.props,
        src = _a.src,
        other = __rest(_a, ["src"]);

    return react_1.default.createElement(styled_1.default, __assign({
      src: src.length === 0 ? placeholder : src
    }, other));
  };

  Avatar.propTypes = {
    /**
     * Ссылка на картинку
     */
    src: prop_types_1.default.string,

    /**
     * Размер
     */
    size: prop_types_1.default.oneOf(['large', 'medium', 'small']),

    /**
     * Круглая
     */
    round: prop_types_1.default.bool,

    /**
     * Дополнительный CSS класс
     */
    className: prop_types_1.default.string,

    /**
     * Дополнительные CSS стили
     */
    style: prop_types_1.default.shape()
  };
  Avatar.defaultProps = {
    src: '',
    size: 'medium',
    round: false,
    className: '',
    style: {}
  };
  return Avatar;
}(react_1.default.PureComponent);

exports.default = Avatar;