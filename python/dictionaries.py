from python.answer_displayers.CheckboxesField import CheckboxesFieldDisplayer
from python.answer_displayers.ClientSideFileUploadField import (
    ClientSideFileUploadFieldDisplayer,
)
from python.answer_displayers.DatePartsField import DatePartsFieldDisplayer
from python.answer_displayers.EmailAddressField import EmailAddressFieldDisplayer
from python.answer_displayers.FreeTextField import FreeTextFieldDisplayer
from python.answer_displayers.MonthYearField import MonthYearFieldDisplayer
from python.answer_displayers.MonthYearField import MonthYearFieldDisplayerMultiInput
from python.answer_displayers.MultiInputField import MultiInputFieldDisplayer
from python.answer_displayers.NumberField import NumberFieldDisplayer
from python.answer_displayers.RadiosField import RadiosFieldDisplayer
from python.answer_displayers.TelephoneNumberField import TelephoneNumberFieldDisplayer
from python.answer_displayers.TextField import TextFieldDisplayer
from python.answer_displayers.UkAddressField import UkAddressFieldDisplayer
from python.answer_displayers.UkAddressField import UkAddressFieldDisplayerMultiInput
from python.answer_displayers.WebsiteField import WebsiteFieldDisplayer
from python.answer_displayers.YesNoField import YesNoFieldDisplayer


class CaseInsensitiveDict(dict):
    def __getitem__(self, key):
        if isinstance(key, str):
            key = key.lower()
        return super().__getitem__(key)


FIELD_TO_DISPLAYER_DICT_MULTI_INPUT = CaseInsensitiveDict(
    {
        "CheckboxesField": CheckboxesFieldDisplayer,
        "ClientSideFileUploadField": ClientSideFileUploadFieldDisplayer,
        "DatePartsField": DatePartsFieldDisplayer,
        "EmailAddressField": EmailAddressFieldDisplayer,
        "FreeTextField": FreeTextFieldDisplayer,
        "MonthYearField": MonthYearFieldDisplayerMultiInput,
        "MultiInputField": MultiInputFieldDisplayer,
        "NumberField": NumberFieldDisplayer,
        "RadiosField": RadiosFieldDisplayer,
        "TelephoneNumberField": TelephoneNumberFieldDisplayer,
        "TextField": TextFieldDisplayer,
        "UkAddressField": UkAddressFieldDisplayerMultiInput,
        "WebsiteField": WebsiteFieldDisplayer,
        "YesNoField": YesNoFieldDisplayer,
    }
)

FIELD_TO_DISPLAYER_DICT = CaseInsensitiveDict(
    {
        "CheckboxesField": CheckboxesFieldDisplayer,
        "ClientSideFileUploadField": ClientSideFileUploadFieldDisplayer,
        "DatePartsField": DatePartsFieldDisplayer,
        "EmailAddressField": EmailAddressFieldDisplayer,
        "FreeTextField": FreeTextFieldDisplayer,
        "MonthYearField": MonthYearFieldDisplayer,
        "MultiInputField": MultiInputFieldDisplayer,
        "NumberField": NumberFieldDisplayer,
        "RadiosField": RadiosFieldDisplayer,
        "TelephoneNumberField": TelephoneNumberFieldDisplayer,
        "TextField": TextFieldDisplayer,
        "UkAddressField": UkAddressFieldDisplayer,
        "WebsiteField": WebsiteFieldDisplayer,
        "YesNoField": YesNoFieldDisplayer,
    }
)

EXISTING_KEY_TO_TYPE_DICT = {
    "ABROnB": "NumberField",
    "ACppgI": "FreeTextField",
    "AJEWXD": "TextField",
    "AOLYnV": "MultiInputField",
    "APSjeB": "TextField",
    "AVShTf": "TextField",
    "AYDIPX": "YesNoField",
    "AYmilW": "TextField",
    "AfAKxk": "TextField",
    "AfWrEq": "Details",
    "AgeRbd": "FreeTextField",
    "Aoectt": "FreeTextField",
    "ArVrka": "ClientSideFileUploadField",
    "AwAAQG": "Html",
    "BBlCko": "YesNoField",
    "BFbzux": "FreeTextField",
    "BKOHaM": "EmailAddressField",
    "BOWelg": "Para",
    "BQKLZz": "YesNoField",
    "BZIEKw": "TextField",
    "BwbIlM": "FreeTextField",
    "BzxgDA": "WebsiteField",
    "CBIWnt": "YesNoField",
    "CDEwxp": "EmailAddressField",
    "CDwTrG": "CheckboxesField",
    "CFpwef": "Html",
    "CNeeiC": "FreeTextField",
    "COiwQr": "YesNoField",
    "CQoLFp": "YesNoField",
    "CSsbsG": "TextField",
    "CZZYvE": "TextField",
    "CaKTWN": "TextField",
    "CeCEtD": "Para",
    "ChXWIQ": "CheckboxesField",
    "CrcLtW": "NumberField",
    "CtrlQH": "Details",
    "CvVZJv": "FreeTextField",
    "CyANDT": "TelephoneNumberField",
    "CzoasH": "MultilineTextField",
    "DCQllx": "CheckboxesField",
    "DFYBTG": "Html",
    "DGNWqE": "FreeTextField",
    "DIZZOC": "YesNoField",
    "DOWJMG": "Details",
    "DOvZvB": "YesNoField",
    "DYUbGM": "TextField",
    "DatnIF": "Details",
    "DbFHbD": "YesNoField",
    "DfTiAW": "Para",
    "DhpcVW": "Html",
    "DmgsiG": "YesNoField",
    "DojAvA": "Para",
    "DvBqCJ": "TelephoneNumberField",
    "DwfHtk": "YesNoField",
    "EEBFao": "ClientSideFileUploadField",
    "EFlBMr": "TextField",
    "EMukio": "EmailAddressField",
    "ENBNvi": "Para",
    "EODncR": "ClientSideFileUploadField",
    "EQffUz": "YesNoField",
    "EShKlA": "WebsiteField",
    "ETJaFn": "TextField",
    "EUtDkE": "Para",
    "EXgmCg": "Para",
    "EaxCii": "Para",
    "EaxCll": "Para",
    "EaxCoo": "Para",
    "EaxCuu": "Para",
    "EfdliG": "UkAddressField",
    "EhPcad": "DatePartsField",
    "EjFSzg": "Html",
    "FFJINe": "Html",
    "FHZRAe": "Html",
    "FIKWHB": "Details",
    "FOURVe": "TextField",
    "FQTkls": "Para",
    "FbWEBY": "TextField",
    "FcdKlB": "WebsiteField",
    "FdWhuX": "Details",
    "Fgwetg": "Para",
    "FhBkJQ": "TelephoneNumberField",
    "FhOGcz": "Details",
    "FhbaEy": "WebsiteField",
    "Fmluly": "Html",
    "FqiBUI": "Para",
    "FtDJfK": "TextField",
    "FwPOFx": "TextField",
    "GBfYfn": "YesNoField",
    "GCjCse": "FreeTextField",
    "GDsdXV": "Para",
    "GETNxN": "FreeTextField",
    "GGBgBY": "FreeTextField",
    "GHjwwB": "Html",
    "GLOpmu": "ClientSideFileUploadField",
    "GLQlOh": "TextField",
    "GNhrIs": "FreeTextField",
    "GNpQfE": "Details",
    "GPxiGe": "TelephoneNumberField",
    "GRWtfV": "NumberField",
    "GVoNOE": "RadiosField",
    "GaAAPb": "Details",
    "GcHIsP": "Para",
    "GjzaqR": "TextField",
    "GlPmCX": "TextField",
    "GnjTGi": "NumberField",
    "GpLJDu": "TextField",
    "GvPSna": "RadiosField",
    "HJBgvw": "FreeTextField",
    "HNjLSt": "Para",
    "HTGgzg": "FreeTextField",
    "HVEUvp": "Html",
    "HYsezC": "FreeTextField",
    "HbtBmC": "Para",
    "HgpNUe": "YesNoField",
    "HlpzLk": "Html",
    "HpLJCu": "MultilineTextField",
    "HpLJDu": "MultilineTextField",
    "HpLJyL": "MonthYearField",
    "HrGXKi": "YesNoField",
    "HvxXPI": "YesNoField",
    "HyWPwE": "YesNoField",
    "IIdfRj": "TextField",
    "ILVEOG": "MultiInputField",
    "IMAUgI": "Para",
    "IOObAC": "TextField",
    "IPHbiD": "Html",
    "IRCxfO": "Para",
    "IRfSZp": "YesNoField",
    "IRugBv": "EmailAddressField",
    "ISSbyv": "Para",
    "IXjMWp": "UkAddressField",
    "Ieudgn": "FreeTextField",
    "IgYvWe": "NumberField",
    "IhboGe": "Html",
    "IkmvEt": "FreeTextField",
    "ImjRDZ": "Para",
    "IoCBIO": "Html",
    "IrIYcA": "FreeTextField",
    "JAAhRP": "TextField",
    "JCACTy": "YesNoField",
    "JCUQcR": "CheckboxesField",
    "JFEJVf": "MultilineTextField",
    "JGhnud": "Para",
    "JHbfIz": "Para",
    "JKqLWU": "TextField",
    "JUgCya": "YesNoField",
    "JXKUcj": "NumberField",
    "JbmcJE": "TextField",
    "Jbsntw": "Html",
    "JdEmqn": "CheckboxesField",
    "JizgZP": "NumberField",
    "JmRlfr": "Para",
    "JnvsPq": "FreeTextField",
    "JootFe": "CheckboxesField",
    "JtBjFp": "NumberField",
    "JtwkMy": "NumberField",
    "JzWvhj": "NumberField",
    "KAgrBz": "TextField",
    "KEnthg": "NumberField",
    "KGaupX": "Para",
    "KHESFr": "FreeTextField",
    "KHESdE": "TextField",
    "KQlOaJ": "CheckboxesField",
    "KUdOhN": "YesNoField",
    "KVYefk": "Html",
    "KYKyud": "Html",
    "KboYIX": "Html",
    "KhISvR": "YesNoField",
    "KmGRXX": "CheckboxesField",
    "KqoaJL": "YesNoField",
    "KuhSWw": "FreeTextField",
    "LAIkqw": "Para",
    "LAUkqw": "Para",
    "LVJcDC": "NumberField",
    "LVKBMP": "Para",
    "LVXUhZ": "Details",
    "LZBrEj": "EmailAddressField",
    "LZUkqw": "Para",
    "LZbOBu": "MonthYearField",
    "LaxeJN": "RadiosField",
    "Lbjxyj": "Para",
    "LfCMtg": "Html",
    "LiUczl": "NumberField",
    "LjKKob": "Html",
    "LjSaeq": "Html",
    "LlvhYl": "YesNoField",
    "LmOXLT": "CheckboxesField",
    "MADkNZ": "FreeTextField",
    "MARbEo": "Html",
    "MGRlEi": "TextField",
    "MIqglh": "CheckboxesField",
    "MKbOlA": "WebsiteField",
    "MLLVPq": "Html",
    "MLwpjP": "YesNoField",
    "MPHvIr": "RadiosField",
    "MPNlZx": "TextField",
    "MRdGKt": "YesNoField",
    "MRrIQO": "Html",
    "MSEqcL": "Html",
    "MSNJQD": "MultiInputField",
    "MXfVrs": "FreeTextField",
    "MadvIr": "RadiosField",
    "MbDkNZ": "FreeTextField",
    "MbtXtU": "Html",
    "MgmuIz": "Html",
    "MopCmv": "MultiInputField",
    "MqKEwS": "Html",
    "MultiInputField": "MultiInputField",
    "MultiInputField-2": "MultiInputField",
    "MyiYMw": "DatePartsField",
    "NBcyAe": "YesNoField",
    "NDqkBg": "Para",
    "NENGMj": "RadiosField",
    "NGSXHE": "FreeTextField",
    "NJBCOa": "Para",
    "NKOmNL": "FreeTextField",
    "NOMwBb": "ClientSideFileUploadField",
    "NPgwcH": "MultiInputField",
    "NUZOvS": "FreeTextField",
    "NWTKzQ": "YesNoField",
    "NZKHOp": "FreeTextField",
    "Nbtcbl": "Para",
    "NcZEsI": "Html",
    "NcnYCn": "TextField",
    "NdCUwM": "Para",
    "NdFwgy": "MultiInputField",
    "NlDVCg": "ClientSideFileUploadField",
    "NlHSBg": "EmailAddressField",
    "NsnkRV": "Para",
    "NxVqXd": "RadiosField",
    "NyudvF": "MultiInputField",
    "OEcmLf": "Para",
    "OJWGGr": "WebsiteField",
    "OKCdpZ": "Html",
    "OKtDsH": "YesNoField",
    "OPOrME": "FreeTextField",
    "OarXHO": "Para",
    "OdTNhg": "Html",
    "OghGGr": "WebsiteField",
    "OnPeeS": "NumberField",
    "OnijFx": "EmailAddressField",
    "OrWSBk": "ClientSideFileUploadField",
    "OtQEKQ": "Html",
    "OtWwRe": "Html",
    "OwgQMC": "Para",
    "PEMJEy": "FreeTextField",
    "PHFkCs": "TextField",
    "PHIskM": "Html",
    "PZANlN": "Details",
    "PfjXKB": "CheckboxesField",
    "PoZmwV": "Html",
    "PraPAq": "CheckboxesField",
    "PrulfI": "MonthYearField",
    "PtVfWP": "Html",
    "PuuaRA": "Para",
    "PxYgqa": "Html",
    "QAgOjR": "Html",
    "QJFQgi": "FreeTextField",
    "QOlbCV": "YesNoField",
    "QPIPjx": "DatePartsField",
    "QUCvFy": "NumberField",
    "QVTPvw": "TextField",
    "QWveYc": "FreeTextField",
    "QfmkfT": "Para",
    "QgNhXX": "TextField",
    "QjJtbs": "CheckboxesField",
    "QuTAqW": "Html",
    "QwImGX": "Para",
    "QzkrIE": "Html",
    "RDsTKl": "TextField",
    "RFTloT": "ClientSideFileUploadField",
    "RKPpEV": "CheckboxesField",
    "RRzTlc": "NumberField",
    "RUdOhN": "YesNoField",
    "RVvtnb": "Para",
    "RXIYZY": "YesNoField",
    "RXrpzV": "MultilineTextField",
    "RafXFy": "Details",
    "ReomFo": "FreeTextField",
    "RgwAoN": "Para",
    "RmMKzM": "FreeTextField",
    "RphKTp": "WebsiteField",
    "RvbwSX": "YesNoField",
    "RxbebZ": "FreeTextField",
    "SGjmSM": "NumberField",
    "SKQluJ": "MultilineTextField",
    "SLrVRM": "Para",
    "SPGORz": "NumberField",
    "SQEpBt": "MultiInputField",
    "SQopKX": "NumberField",
    "SRHsAx": "MultilineTextField",
    "STfdvD": "YesNoField",
    "SUTxtj": "YesNoField",
    "SUVlQH": "Html",
    "SWfcTo": "TextField",
    "SXfYwl": "Html",
    "SdwIUb": "YesNoField",
    "SiOmZn": "TextField",
    "SkocDi": "FreeTextField",
    "Skuupp": "Html",
    "SnLGJE": "TextField",
    "SrtVAs": "FreeTextField",
    "TFdnGq": "NumberField",
    "THOdae": "NumberField",
    "TUqPvI": "Html",
    "TgBzyM": "RadiosField",
    "TkCSKm": "Html",
    "TkDxmD": "TextField",
    "TlGjXb": "FreeTextField",
    "TlHDXK": "Para",
    "TrTaZQ": "TextField",
    "TtBDIZ": "YesNoField",
    "TtOReP": "ClientSideFileUploadField",
    "TzOokX": "MultiInputField",
    "UDTxqC": "CheckboxesField",
    "UDhjLS": "MultiInputField",
    "UEndmh": "NumberField",
    "UEyAEE": "Para",
    "ULPcAU": "CheckboxesField",
    "UNQlIu": "Html",
    "UPmQrD": "YesNoField",
    "URmfYy": "Details",
    "UYkwEN": "Para",
    "Uaeyae": "YesNoField",
    "UbjYqE": "FreeTextField",
    "UiHVet": "Html",
    "UjWnlf": "Para",
    "UjZJtC": "TextField",
    "Ulfbvv": "Html",
    "UplABn": "Para",
    "UtVqvP": "Para",
    "UyaAHw": "NumberField",
    "VGXXyq": "YesNoField",
    "VGdMUY": "Html",
    "VMuNKg": "Html",
    "VNjRgZ": "FreeTextField",
    "VNjtkO": "Para",
    "VWkLlk": "RadiosField",
    "VXKVmM": "TextField",
    "VfUORj": "Html",
    "VhkCbM": "UkAddressField",
    "VjoSon": "Html",
    "VwxiGn": "YesNoField",
    "WDDkVB": "FreeTextField",
    "WDouQc": "NumberField",
    "WGmDZu": "YesNoField",
    "WGmcyu": "YesNoField",
    "WKIGQE": "FreeTextField",
    "WSaPbE": "RadiosField",
    "WWHYDI": "YesNoField",
    "WWWWxy": "TextField",
    "WWdVTC": "FreeTextField",
    "WYZWDE": "Html",
    "WnykzV": "Html",
    "WpaKDW": "Html",
    "Wyesgy": "YesNoField",
    "XCcqae": "TextField",
    "XEBfyN": "NumberField",
    "XFvKwZ": "Html",
    "XPDbsh": "FreeTextField",
    "XPDbsl": "FreeTextField",
    "XPcbJx": "FreeTextField",
    "XSwCIQ": "Para",
    "XWvsQw": "Html",
    "XXGyzn": "FreeTextField",
    "XXVXuj": "TextField",
    "XbgRGb": "NumberField",
    "XcjQVp": "Details",
    "XeNlFF": "Para",
    "XiHjDO": "TextField",
    "XkKtNg": "Para",
    "XsAoTv": "MultiInputField",
    "YFPgTB": "YesNoField",
    "YVsPtE": "TextField",
    "YauUjZ": "NumberField",
    "YbfbSC": "FreeTextField",
    "YdtlQZ": "TextField",
    "YnSQGx": "Html",
    "YqUokQ": "Details",
    "YyMRdP": "NumberField",
    "ZAKTgH": "Html",
    "ZBjDTn": "TextField",
    "ZCNFUF": "Html",
    "ZEKMQd": "YesNoField",
    "ZHPwln": "TextField",
    "ZJCVjE": "NumberField",
    "ZLsNnZ": "Html",
    "ZMgdzY": "ClientSideFileUploadField",
    "ZQolYb": "UkAddressField",
    "ZRZlBH": "NumberField",
    "ZZisap": "NumberField",
    "ZhyrfW": "Para",
    "ZmYhgR": "YesNoField",
    "ZyEFDq": "Html",
    "ZyIQGI": "FreeTextField",
    "aAeszH": "YesNoField",
    "aHIGbK": "TextField",
    "aJGyCR": "TextField",
    "aTxAPP": "ClientSideFileUploadField",
    "aVhByI": "Html",
    "aaixbv": "Para",
    "abdbzq": "ClientSideFileUploadField",
    "abkrwo": "MultiInputField",
    "abqMko": "Html",
    "adkAXU": "Para",
    "affVbH": "YesNoField",
    "apGjFS": "TextField",
    "apJIBm": "FreeTextField",
    "auUher": "TextField",
    "ayzqnK": "YesNoField",
    "azCutK": "FreeTextField",
    "bCQWFN": "YesNoField",
    "bCXNtj": "MonthYearField",
    "bDWjTN": "ClientSideFileUploadField",
    "bEWpAj": "FreeTextField",
    "bGCkPI": "CheckboxesField",
    "bLCDBI": "Html",
    "bRPzWU": "YesNoField",
    "bTSizq": "FreeTextField",
    "bcJWbJ": "NumberField",
    "bgHVXX": "ClientSideFileUploadField",
    "biTJjF": "UkAddressField",
    "bkJsiO": "FreeTextField",
    "bkbGIE": "DatePartsField",
    "bpzrMJ": "FreeTextField",
    "brLcqY": "FreeTextField",
    "bsUoNG": "TextField",
    "btTtIb": "FreeTextField",
    "cFtDbE": "Html",
    "cGVEui": "Details",
    "cHFrIp": "NumberField",
    "cLDRvN": "NumberField",
    "cNwNrt": "Para",
    "cPpwET": "TextField",
    "cQpClK": "Html",
    "cYEiGS": "NumberField",
    "cYvlXe": "Html",
    "cbYcqS": "TextField",
    "cpFthG": "TextField",
    "cpeDcC": "Html",
    "dHyMmB": "Para",
    "dOyKiO": "ClientSideFileUploadField",
    "dPYuee": "Para",
    "dSdeYa": "NumberField",
    "dWxxdq": "YesNoField",
    "dboegN": "NumberField",
    "dmKRCF": "MultilineTextField",
    "dpDFgB": "TextField",
    "dpLyQh": "FreeTextField",
    "dryWCd": "Html",
    "dypuJs": "FreeTextField",
    "eADHGN": "RadiosField",
    "eJdudr": "Html",
    "eWmNSY": "TextField",
    "eenpQC": "Details",
    "emVGxS": "FreeTextField",
    "eptZkL": "CheckboxesField",
    "fFIuPP": "MultilineTextField",
    "fHodTO": "CheckboxesField",
    "fHvilU": "TextField",
    "fIEUcb": "TextField",
    "fJVdgL": "Html",
    "fUMWcd": "TextField",
    "fZxwWr": "Para",
    "fbFeEx": "MultiInputField",
    "fixtAm": "Para",
    "fjVmOt": "FreeTextField",
    "fmcTtE": "NumberField",
    "fnIdkJ": "NumberField",
    "fvAgYh": "Html",
    "fzAoYw": "Details",
    "gBIWQr": "CheckboxesField",
    "gDTsgG": "FreeTextField",
    "gJlzFS": "TelephoneNumberField",
    "gKImMR": "Para",
    "gLQlyJ": "TextField",
    "gLqiyJ": "TextField",
    "gMoQAm": "Html",
    "gNgJme": "TelephoneNumberField",
    "gSQPxs": "YesNoField",
    "gScdbf": "YesNoField",
    "gXvnZA": "YesNoField",
    "gaWgrE": "Details",
    "gaXSIn": "Html",
    "ghzLRv": "DatePartsField",
    "gkulUE": "YesNoField",
    "gqavTE": "Para",
    "gwrwki": "Para",
    "hGsUaZ": "TextField",
    "hJkmBS": "YesNoField",
    "hRxMbZ": "Details",
    "hdmYjg": "YesNoField",
    "hnLurH": "YesNoField",
    "hsEgFI": "Details",
    "hvzzWB": "YesNoField",
    "iBCGxY": "YesNoField",
    "iLxCxn": "NumberField",
    "iMJdfs": "TextField",
    "iMcDuZ": "Para",
    "iPBHAo": "Html",
    "iSbwDM": "FreeTextField",
    "iTeLGU": "TextField",
    "iZdZrr": "NumberField",
    "iZzvMF": "Html",
    "ieRCkI": "FreeTextField",
    "iqnlTk": "YesNoField",
    "iqqqTk": "YesNoField",
    "itlIfE": "Html",
    "jAhuWN": "FreeTextField",
    "jFPlEJ": "YesNoField",
    "jGjScT": "DatePartsField",
    "jLIgoi": "NumberField",
    "jcjHke": "Para",
    "jcjKhc": "Para",
    "jcjKhd": "Para",
    "jcjKhe": "Para",
    "jcmcJE": "RadiosField",
    "jdPkiX": "YesNoField",
    "jdiAQM": "Html",
    "jemcJE": "TextField",
    "jencJE": "TextField",
    "jeocJE": "TextField",
    "jhcFBw": "Html",
    "jkQGyo": "FreeTextField",
    "jsBTOY": "Html",
    "jsUbAI": "YesNoField",
    "jvfZpA": "TelephoneNumberField",
    "jzzBDS": "YesNoField",
    "kBCjwC": "WebsiteField",
    "kOTdzu": "YesNoField",
    "kPYiQE": "YesNoField",
    "kPvpzG": "FreeTextField",
    "kQJIbS": "ClientSideFileUploadField",
    "kRxOHF": "MultiInputField",
    "kSZqfv": "TextField",
    "kYjJFy": "FreeTextField",
    "kaQUSV": "TextField",
    "kaQUfV": "TextField",
    "kbOHaM": "TextField",
    "kgGPmd": "FreeTextField",
    "kietnW": "TextField",
    "kjuHtl": "RadiosField",
    "kxgOne": "FreeTextField",
    "kxgThr": "FreeTextField",
    "kxgTwo": "FreeTextField",
    "kxgWTy": "FreeTextField",
    "lAdiPi": "Para",
    "lFTgWk": "YesNoField",
    "lIusUr": "Details",
    "lLCjXj": "Para",
    "lOliDH": "FreeTextField",
    "lQEkep": "FreeTextField",
    "lRfhGB": "TelephoneNumberField",
    "lZVkeg": "TextField",
    "lajFtB": "RadiosField",
    "leIxEX": "RadiosField",
    "lgfiGB": "FreeTextField",
    "lgyZWP": "Html",
    "lifPop": "YesNoField",
    "ljfzCy": "EmailAddressField",
    "lkwQrI": "TextField",
    "lsKMnV": "Html",
    "lthftn": "Para",
    "lusfLU": "Html",
    "lwrCQz": "NumberField",
    "lzmhPS": "Html",
    "mADkNz": "FreeTextField",
    "mCOxVf": "Html",
    "mCbbyN": "MultiInputField",
    "mIGfuL": "ClientSideFileUploadField",
    "mPqjks": "Html",
    "matkNH": "YesNoField",
    "mbbYPe": "FreeTextField",
    "mgIesb": "FreeTextField",
    "mhYQzL": "UkAddressField",
    "miInAI": "Html",
    "mkuLqp": "Details",
    "mmTkva": "FreeTextField",
    "mmwzGc": "RadiosField",
    "mrCotx": "TextField",
    "muRwiL": "TextField",
    "muhnok": "RadiosField",
    "mxgewf": "Details",
    "nCbPsB": "WebsiteField",
    "nDfjRY": "Html",
    "nGupOl": "FreeTextField",
    "nGyEel": "Para",
    "nITyAP": "Html",
    "nMfGTS": "FreeTextField",
    "nURkuc": "TextField",
    "nYJiWy": "TextField",
    "nbDkNZ": "FreeTextField",
    "ndpQJk": "ClientSideFileUploadField",
    "ndySbC": "RadiosField",
    "ngpQfE": "Details",
    "nkPfyn": "CheckboxesField",
    "nouxzF": "Html",
    "nvMmGE": "FreeTextField",
    "nxpXlE": "YesNoField",
    "nyusrL": "YesNoField",
    "oFyZJS": "FreeTextField",
    "oHcGUy": "Html",
    "oOPUXI": "FreeTextField",
    "oXGwlA": "RadiosField",
    "oaIntA": "YesNoField",
    "opFJRm": "TextField",
    "orUXQc": "Para",
    "owXPBs": "TextField",
    "oxMLrb": "MultiInputField",
    "ozgwXq": "ClientSideFileUploadField",
    "pATWyM": "RadiosField",
    "pDrPDz": "TextField",
    "pMffVz": "TextField",
    "pRTStx": "Html",
    "pRqIkv": "YesNoField",
    "pTuytP": "Html",
    "pVBwci": "NumberField",
    "pWFwci": "FreeTextField",
    "pWwCRM": "YesNoField",
    "paawsj": "YesNoField",
    "pepEsp": "Details",
    "pggKuZ": "Html",
    "piPFPL": "YesNoField",
    "pkTHJq": "Html",
    "plmwJv": "TextField",
    "pnMqcm": "Html",
    "pppiYl": "NumberField",
    "pqYxJO": "CheckboxesField",
    "pwPYdF": "NumberField",
    "qGPvvB": "Html",
    "qMRHPz": "FreeTextField",
    "qPcbJQ": "FreeTextField",
    "qQLYzL": "MultiInputField",
    "qQLyXL": "MultiInputField",
    "qQSVEn": "YesNoField",
    "qRDTUc": "TextField",
    "qWuSCy": "YesNoField",
    "qXNkfr": "FreeTextField",
    "qZNAHj": "Para",
    "qlqyUq": "CheckboxesField",
    "qnNciV": "Html",
    "qqktzL": "MultiInputField",
    "qsZLjZ": "FreeTextField",
    "qwktlZ": "YesNoField",
    "qwktzL": "MultiInputField",
    "rFXeZo": "ClientSideFileUploadField",
    "rGADMs": "YesNoField",
    "rHMVcR": "Html",
    "rKHBnt": "TextField",
    "rMvZDG": "ClientSideFileUploadField",
    "rNYmXq": "TextField",
    "rYAgMN": "YesNoField",
    "rgGQHh": "Details",
    "rhgBAM": "Html",
    "rhmmaQ": "NumberField",
    "rmBPvK": "UkAddressField",
    "rtFyqT": "TextField",
    "sBiSgs": "Html",
    "sGtdkY": "Para",
    "sIFBGc": "YesNoField",
    "sPbqXm": "Html",
    "sVlFcN": "ClientSideFileUploadField",
    "sXlkAm": "MultiInputField",
    "sXyxUW": "Html",
    "scYeIU": "TextField",
    "sdeLyR": "YesNoField",
    "skBfqS": "YesNoField",
    "smBPvK": "UkAddressField",
    "smwSHp": "Html",
    "tAoOKx": "MultiInputField",
    "tAoPKx": "MultiInputField",
    "tApPKx": "MultiInputField",
    "tAtJGz": "NumberField",
    "tBwdYp": "NumberField",
    "tDVPnl": "FreeTextField",
    "tSKhQQ": "MultiInputField",
    "tTOrEp": "ClientSideFileUploadField",
    "tVziRL": "Html",
    "tYoOqx": "MultiInputField",
    "tYvkAL": "Html",
    "tZoOKx": "MultiInputField",
    "teowxM": "TextField",
    "tfgPej": "TextField",
    "tgnZof": "Html",
    "tikwxM": "TextField",
    "tjZlml": "YesNoField",
    "tlrpLI": "Html",
    "tmVEPV": "Html",
    "toyZsH": "Html",
    "tpQVaN": "Html",
    "ttEOXi": "YesNoField",
    "tztfSa": "Html",
    "uBXptf": "FreeTextField",
    "uHcHaC": "Html",
    "uKmWaC": "Html",
    "uMhZAI": "Details",
    "uNgkim": "Html",
    "uPvsqM": "YesNoField",
    "uRADEY": "Html",
    "uVWIJF": "TextField",
    "uYsivE": "TextField",
    "udcUvc": "Para",
    "umAyqH": "YesNoField",
    "umDxBP": "Html",
    "uuyBff": "MultiInputField",
    "uypCNM": "FreeTextField",
    "vDJxWL": "Html",
    "vEOdBS": "MultiInputField",
    "vKSMwi": "FreeTextField",
    "vKnMPG": "YesNoField",
    "vOpXVi": "Para",
    "vRPbaz": "Html",
    "vSQKwD": "YesNoField",
    "vStFMu": "YesNoField",
    "vUJIXx": "Para",
    "vUdzKC": "Para",
    "vYYoAC": "CheckboxesField",
    "vbmqwB": "YesNoField",
    "vqEdii": "Para",
    "vtOZNq": "NumberField",
    "vuZiab": "YesNoField",
    "vuutkz": "Html",
    "vwXfgR": "Html",
    "wAUFqr": "YesNoField",
    "wFVhAN": "Html",
    "wJrJWY": "YesNoField",
    "wOUNbF": "NumberField",
    "wQqPSZ": "ClientSideFileUploadField",
    "wTdyhk": "NumberField",
    "wUFaUF": "YesNoField",
    "wViAiU": "FreeTextField",
    "wcsfgE": "Para",
    "wfYkDn": "Para",
    "whlRYS": "FreeTextField",
    "wjBFTf": "YesNoField",
    "wlGQua": "NumberField",
    "wnoFHW": "Html",
    "wruiyh": "Para",
    "wudRxx": "FreeTextField",
    "wxCszQ": "FreeTextField",
    "xDpgOK": "MultiInputField",
    "xFVQZF": "Para",
    "xGnWEW": "RadiosField",
    "xKWJWW": "Html",
    "xPcbJX": "FreeTextField",
    "xPkdRX": "FreeTextField",
    "xYNpHc": "YesNoField",
    "xbOBdn": "TelephoneNumberField",
    "xdywoY": "Html",
    "xgrxxv": "EmailAddressField",
    "xsaziw": "Details",
    "yEmHpp": "UkAddressField",
    "yEnOXB": "Html",
    "yHXVSA": "FreeTextField",
    "yMCivI": "FreeTextField",
    "yWqvFe": "Details",
    "yWtfkb": "TextField",
    "yaQoxU": "RadiosField",
    "yiAMdU": "Html",
    "ymlmrX": "TextField",
    "yufsGb": "Para",
    "yuvajR": "NumberField",
    "yuzbjT": "NumberField",
    "zAIXJE": "Html",
    "zDhrJs": "TextField",
    "zHgZBx": "FreeTextField",
    "zJAnwc": "NumberField",
    "zKKouR": "FreeTextField",
    "zTcrYo": "FreeTextField",
    "zbEFpO": "Html",
    "zbqnvm": "NumberField",
    "zgqCkd": "YesNoField",
    "zsbmRx": "TextField",
    "zsoLdf": "YesNoField",
    "zuCRBk": "NumberField",
    "zvPzXN": "NumberField",
    "zwQHCl": "FreeTextField",
    "zyWOmY": "Html",
}
