export interface DefaultProps {
    country: COUNTRY_C0DE;
    fileType: 'png' | 'webp' | 'jpeg';
}
export interface WaveyProps extends DefaultProps {
    ratio: ASPECT_RATIO;
}
export interface FHeightProps extends DefaultProps {
    flagHeight: 'h20' | 'h24' | 'h40' | 'h60' | 'h80' | 'h120' | 'h240';
}
export interface FWidthProps extends DefaultProps {
    flagWidth: 'w20' | 'w40' | 'w80' | 'w160' | 'w320' | 'w640' | 'w1280' | 'w2560';
}
export interface SVGProps {
    country: COUNTRY_C0DE;
    flagWidth: string;
}
export declare type FILE_TYPES = 'png' | 'webp' | 'svg' | 'jpeg';
export declare type ASPECT_RATIO = '16x12' | '20x15' | '24x18' | '28x21' | '32x24' | '36x27' | '40x30' | '48x36' | '56x42' | '60x45' | '64x48' | '72x54' | '80x60' | '84x63' | '96x72' | '108x81' | '112x84' | '120x90' | '128x96' | '144x108' | '160x120' | '192x144' | '224x168' | '256x192';
export declare type COUNTRY_C0DE = 'ad' | 'ae' | 'af' | 'ag' | 'ai' | 'al' | 'am' | 'ao' | 'aq' | 'ar' | 'as' | 'at' | 'au' | 'aw' | 'ax' | 'az' | 'ba' | 'bb' | 'bd' | 'be' | 'bf' | 'bg' | 'bh' | 'bi' | 'bj' | 'bl' | 'bm' | 'bn' | 'bo' | 'bq' | 'br' | 'bs' | 'bt' | 'bv' | 'bw' | 'by' | 'bz' | 'ca' | 'cc' | 'cd' | 'cf' | 'cg' | 'ch' | 'ci' | 'ck' | 'cl' | 'cm' | 'cn' | 'co' | 'cr' | 'cu' | 'cv' | 'cw' | 'cx' | 'cy' | 'cz' | 'de' | 'dj' | 'dk' | 'dm' | 'do' | 'dz' | 'ec' | 'ee' | 'eg' | 'eh' | 'er' | 'es' | 'et' | 'fi' | 'fj' | 'fk' | 'fm' | 'fo' | 'fr' | 'ga' | 'gb-eng' | 'gb-nir' | 'gb-sct' | 'gb-wls' | 'gb' | 'gd' | 'ge' | 'gf' | 'gg' | 'gh' | 'gi' | 'gl' | 'gm' | 'gn' | 'gp' | 'gq' | 'gr' | 'gs' | 'gt' | 'gu' | 'gw' | 'gy' | 'hk' | 'hm' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'ie' | 'il' | 'im' | 'in' | 'io' | 'iq' | 'ir' | 'is' | 'it' | 'je' | 'jm' | 'jo' | 'jp' | 'ke' | 'kg' | 'kh' | 'ki' | 'km' | 'kn' | 'kp' | 'kr' | 'kw' | 'ky' | 'kz' | 'la' | 'lb' | 'lc' | 'li' | 'lk' | 'lr' | 'ls' | 'lt' | 'lu' | 'lv' | 'ly' | 'ma' | 'mc' | 'md' | 'me' | 'mf' | 'mg' | 'mh' | 'mk' | 'ml' | 'mm' | 'mn' | 'mo' | 'mp' | 'mq' | 'mr' | 'ms' | 'mt' | 'mu' | 'mv' | 'mw' | 'mx' | 'my' | 'mz' | 'na' | 'nc' | 'ne' | 'nf' | 'ng' | 'ni' | 'nl' | 'no' | 'np' | 'nr' | 'nu' | 'nz' | 'om' | 'pa' | 'pe' | 'pf' | 'pg' | 'ph' | 'pk' | 'pl' | 'pm' | 'pn' | 'pr' | 'ps' | 'pt' | 'pw' | 'py' | 'qa' | 're' | 'ro' | 'rs' | 'ru' | 'rw' | 'sa' | 'sb' | 'sc' | 'sd' | 'se' | 'sg' | 'sh' | 'si' | 'sj' | 'sk' | 'sl' | 'sm' | 'sn' | 'so' | 'sr' | 'ss' | 'st' | 'sv' | 'sx' | 'sy' | 'sz' | 'tc' | 'td' | 'tf' | 'tg' | 'th' | 'tj' | 'tk' | 'tl' | 'tm' | 'tn' | 'to' | 'tr' | 'tt' | 'tv' | 'tw' | 'tz' | 'ua' | 'ug' | 'um' | 'us' | 'uy' | 'uz' | 'va' | 'vc' | 've' | 'vg' | 'vi' | 'vn' | 'vu' | 'wf' | 'ws' | 'xk' | 'ye' | 'yt' | 'za' | 'zm' | 'zw';
