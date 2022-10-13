import React from 'react'
import { useColorMode } from '@docusaurus/theme-common';

const DevelopmentSvg = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      {colorMode === 'light' ? (<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M98.3641 41.693C93.2889 17.4848 42.8174 37.3937 52.5957 18.8729C56.4955 11.4863 55.5381 2.82461 46.8635 0.6291C12.4471 -8.08164 -23.5951 76.7412 25.1828 65.702C35.5299 63.3602 41.6521 54.04 44.6908 59.9105C50.7332 71.584 34.4107 84.9965 40.8465 95.5689C53.3494 116.109 102.112 59.5723 98.3641 41.693Z" fill="url(#paint0_linear_30122_943)" />
        <path opacity="0.1" d="M88.4266 22.888C87.2099 22.888 86.0865 23.2855 85.1777 23.9568C84.1582 22.2314 82.2803 21.0728 80.1308 21.0728L32.7238 21.0738C29.8873 21.0738 27.5217 23.0896 26.9808 25.7668H24.2062C23.2816 24.0529 21.4699 22.8882 19.3859 22.8882C16.3627 22.8882 13.9119 25.339 13.9119 28.3623C13.9119 31.3855 16.3627 33.8363 19.3859 33.8363C21.4699 33.8363 23.2816 32.6716 24.2062 30.9578H26.8644V64.7937H23.9816C23.283 61.05 20.0006 58.2154 16.0543 58.2154C11.5992 58.2154 7.98749 61.8269 7.98749 66.2822C7.98749 69.9953 10.4971 73.1203 13.9117 74.0589V84.9588C13.9117 88.1949 16.5351 90.8181 19.7711 90.8181H66.8955C70.1316 90.8181 72.7549 88.1949 72.7549 84.9588V69.5437H84.0369C85.117 69.5437 85.99 68.6687 85.99 67.5906V33.264C86.724 33.6295 87.5508 33.8361 88.4264 33.8361C91.4496 33.8361 93.9004 31.3853 93.9004 28.3621C93.9004 25.3388 91.4498 22.888 88.4266 22.888Z" fill="#2626BB" />
        <path d="M19.3859 29.1486C22.4091 29.1486 24.8599 26.6978 24.8599 23.6746C24.8599 20.6514 22.4091 18.2006 19.3859 18.2006C16.3627 18.2006 13.9119 20.6514 13.9119 23.6746C13.9119 26.6978 16.3627 29.1486 19.3859 29.1486Z" fill="#FFC3DE" />
        <path d="M85.9902 22.2447V62.9029C85.9902 63.981 85.1172 64.856 84.0371 64.856H72.7551L71.7785 62.9029V16.8334L78.6144 16.3851H80.1308C83.3672 16.3853 85.9902 19.0103 85.9902 22.2447Z" fill="#9EAFFD" />
        <path d="M85.9902 23.4594V33.266C84.9765 32.7601 84.1425 31.9515 83.6054 30.9574H40.0996V25.766H83.6054C84.1425 24.772 84.9765 23.9635 85.9902 23.4594Z" fill="#8298FD" />
        <path d="M88.6183 26.2701H22.0203C20.5869 26.2701 19.4248 25.1082 19.4248 23.6746C19.4248 22.2412 20.5867 21.0791 22.0203 21.0791H88.6185V26.2701H88.6183Z" fill="#FF7EB7" />
        <path d="M72.7559 49.4082V80.2715C72.7559 83.5078 70.1309 86.1308 66.8965 86.1308H60.584L26.8652 60.1054V49.4082L32.0652 48.4316H67.74L72.7559 49.4082Z" fill="#D1DDFF" />
        <path d="M72.7551 49.4082V22.2455C72.7551 19.0092 75.3781 16.3861 78.6144 16.3861H32.7238C29.4879 16.3861 26.8644 19.0094 26.8644 22.2455V49.4082H72.7551Z" fill="white" />
        <path d="M55.0221 45.2035C55.5614 45.2035 55.9986 44.7663 55.9986 44.2269C55.9986 43.6876 55.5614 43.2504 55.0221 43.2504C54.4827 43.2504 54.0455 43.6876 54.0455 44.2269C54.0455 44.7663 54.4827 45.2035 55.0221 45.2035Z" fill="#02FFB2" />
        <path d="M58.1895 45.2037C58.7288 45.2037 59.166 44.7665 59.166 44.2271C59.166 43.6878 58.7288 43.2505 58.1895 43.2505C57.6501 43.2505 57.2129 43.6878 57.2129 44.2271C57.2129 44.7665 57.6501 45.2037 58.1895 45.2037Z" fill="#02FFB2" />
        <path d="M61.3568 45.2037C61.8962 45.2037 62.3334 44.7665 62.3334 44.2271C62.3334 43.6878 61.8962 43.2505 61.3568 43.2505C60.8175 43.2505 60.3803 43.6878 60.3803 44.2271C60.3803 44.7665 60.8175 45.2037 61.3568 45.2037Z" fill="#02FFB2" />
        <path d="M36.6713 50.3847H33.0418C32.5025 50.3847 32.0652 49.9474 32.0652 49.4082C32.0652 48.8689 32.5025 48.4316 33.0418 48.4316H36.6713C37.2105 48.4316 37.6478 48.8689 37.6478 49.4082C37.6478 49.9474 37.2107 50.3847 36.6713 50.3847Z" fill="#FF7EB7" />
        <path d="M66.7635 55.9281H33.0418C32.5025 55.9281 32.0652 55.4908 32.0652 54.9515C32.0652 54.4123 32.5025 53.975 33.0418 53.975H66.7635C67.3027 53.975 67.74 54.4123 67.74 54.9515C67.74 55.4908 67.3029 55.9281 66.7635 55.9281Z" fill="#9EAFFD" />
        <path d="M66.7635 59.9088H33.0418C32.5025 59.9088 32.0652 59.4714 32.0652 58.9322C32.0652 58.3929 32.5025 57.9556 33.0418 57.9556H66.7635C67.3027 57.9556 67.74 58.3929 67.74 58.9322C67.74 59.4714 67.3029 59.9088 66.7635 59.9088Z" fill="#9EAFFD" />
        <path d="M66.7635 63.8894H33.0418C32.5025 63.8894 32.0652 63.4521 32.0652 62.9129C32.0652 62.3736 32.5025 61.9363 33.0418 61.9363H66.7635C67.3027 61.9363 67.74 62.3736 67.74 62.9129C67.74 63.4521 67.3029 63.8894 66.7635 63.8894Z" fill="#9EAFFD" />
        <path d="M66.7635 69.7074H33.0418C32.5025 69.7074 32.0652 69.2701 32.0652 68.7308C32.0652 68.1916 32.5025 67.7543 33.0418 67.7543H66.7635C67.3027 67.7543 67.74 68.1916 67.74 68.7308C67.74 69.2701 67.3029 69.7074 66.7635 69.7074Z" fill="#9EAFFD" />
        <path d="M66.7635 73.688H33.0418C32.5025 73.688 32.0652 73.2507 32.0652 72.7115C32.0652 72.1722 32.5025 71.7349 33.0418 71.7349H66.7635C67.3027 71.7349 67.74 72.1722 67.74 72.7115C67.74 73.2507 67.3029 73.688 66.7635 73.688Z" fill="#9EAFFD" />
        <path d="M62.8572 77.6689H33.0418C32.5025 77.6689 32.0652 77.2316 32.0652 76.6924C32.0652 76.1531 32.5025 75.7158 33.0418 75.7158H62.8572C63.3965 75.7158 63.8338 76.1531 63.8338 76.6924C63.8338 77.2316 63.3967 77.6689 62.8572 77.6689Z" fill="#9EAFFD" />
        <path d="M65.6621 86.1312L60.584 86.131L47.6933 85.1535H29.1465L24.8496 86.1295L19.7715 86.1293C16.5351 86.1293 13.9121 83.5062 13.9121 80.2699V62.059C13.9121 60.9808 14.7871 60.1058 15.8652 60.1058H57.8496C58.9277 60.1058 59.8027 60.9808 59.8027 62.059V80.2719C59.8027 83.5084 62.4258 86.1312 65.6621 86.1312Z" fill="white" />
        <path d="M24.1211 66.2816C24.1211 70.7367 20.5097 74.348 16.0547 74.348C15.3125 74.348 14.5937 74.2484 13.9121 74.059V62.059C13.9121 60.9808 14.7871 60.1058 15.8652 60.1058H21.2441C23.0039 61.5865 24.1211 63.8031 24.1211 66.2816Z" fill="#D1DDFF" />
        <path d="M60.584 86.1312L24.8496 86.1293C21.6133 86.1293 18.9902 83.5062 18.9902 80.2699V66.3558C18.9902 65.7094 19.5156 65.184 20.1621 65.184H53.5527C54.1992 65.184 54.7246 65.7094 54.7246 66.3558V80.2719C54.7246 83.5084 57.3476 86.1312 60.584 86.1312Z" fill="#D1DDFF" />
        <path d="M24.1211 66.2816C24.1211 69.7015 21.9941 72.6234 18.9902 73.7972V66.3558C18.9902 65.7094 19.5156 65.184 20.1621 65.184H24.0468C24.0957 65.5435 24.1211 65.9088 24.1211 66.2816Z" fill="#B6C4FF" />
        <path d="M88.4265 29.1486C91.4498 29.1486 93.9006 26.6978 93.9006 23.6746C93.9006 20.6514 91.4498 18.2006 88.4265 18.2006C85.4033 18.2006 82.9525 20.6514 82.9525 23.6746C82.9525 26.6978 85.4033 29.1486 88.4265 29.1486Z" fill="#FFC3DE" />
        <path d="M88.4265 25.6976C87.3109 25.6976 86.4033 24.7902 86.4033 23.6746C86.4033 22.559 87.3107 21.6516 88.4265 21.6516C89.542 21.6516 90.4494 22.559 90.4494 23.6746C90.4494 24.7902 89.542 25.6976 88.4265 25.6976Z" fill="#FFA7CE" />
        <path d="M49.5805 45.2037H33.2371C32.5898 45.2037 32.0652 44.6791 32.0652 44.0318V22.6455C32.0652 21.9982 32.5898 21.4736 33.2371 21.4736H49.5805C50.2277 21.4736 50.7523 21.9982 50.7523 22.6455V44.0318C50.7523 44.6789 50.2277 45.2037 49.5805 45.2037Z" fill="#6583FE" />
        <path d="M45.4588 38.384C45.1871 38.2164 44.8322 38.2871 44.6467 38.5467C44.0131 39.4332 42.6271 41.1781 42.247 40.066C41.6762 38.3951 46.2982 30.2256 42.284 28.9125C39.6931 28.0648 37.847 30.5236 37.1597 31.6478C36.9851 31.9334 37.0738 32.306 37.3588 32.4818C37.6304 32.6494 37.9853 32.5787 38.1709 32.3191C38.8045 31.4326 40.1904 29.6877 40.5705 30.7998C41.1414 32.4707 36.5193 40.64 40.5336 41.9533C43.1244 42.801 44.9705 40.3422 45.6578 39.2179C45.8324 38.9324 45.7437 38.5597 45.4588 38.384Z" fill="white" />
        <path d="M41.4088 27.799C42.3061 27.799 43.0336 27.0715 43.0336 26.1742C43.0336 25.2768 42.3061 24.5494 41.4088 24.5494C40.5114 24.5494 39.784 25.2768 39.784 26.1742C39.784 27.0715 40.5114 27.799 41.4088 27.799Z" fill="white" />
        <path d="M58.6516 23.5732H55.0221C54.4828 23.5732 54.0455 23.1359 54.0455 22.5966C54.0455 22.0574 54.4828 21.6201 55.0221 21.6201H58.6516C59.1908 21.6201 59.6281 22.0574 59.6281 22.5966C59.6281 23.1359 59.1908 23.5732 58.6516 23.5732Z" fill="#FF7EB7" />
        <path d="M66.7709 29.1166H55.0219C54.4826 29.1166 54.0453 28.6793 54.0453 28.14C54.0453 27.6008 54.4826 27.1635 55.0219 27.1635H66.7709C67.3102 27.1635 67.7475 27.6008 67.7475 28.14C67.7475 28.6793 67.3104 29.1166 66.7709 29.1166Z" fill="#D1DDFF" />
        <path d="M66.7709 33.0972H55.0219C54.4826 33.0972 54.0453 32.6599 54.0453 32.1207C54.0453 31.5814 54.4826 31.1441 55.0219 31.1441H66.7709C67.3102 31.1441 67.7475 31.5814 67.7475 32.1207C67.7475 32.6599 67.3104 33.0972 66.7709 33.0972Z" fill="#D1DDFF" />
        <path d="M66.7709 37.0779H55.0219C54.4826 37.0779 54.0453 36.6406 54.0453 36.1013C54.0453 35.5621 54.4826 35.1248 55.0219 35.1248H66.7709C67.3102 35.1248 67.7475 35.5621 67.7475 36.1013C67.7475 36.6406 67.3104 37.0779 66.7709 37.0779Z" fill="#D1DDFF" />
        <path d="M62.8647 41.0588H55.0219C54.4826 41.0588 54.0453 40.6215 54.0453 40.0822C54.0453 39.543 54.4826 39.1057 55.0219 39.1057H62.8647C63.4039 39.1057 63.8412 39.543 63.8412 40.0822C63.8412 40.6215 63.4041 41.0588 62.8647 41.0588Z" fill="#D1DDFF" />
        <path d="M16.0545 69.6611C20.5097 69.6611 24.1213 66.0495 24.1213 61.5943C24.1213 57.1392 20.5097 53.5275 16.0545 53.5275C11.5993 53.5275 7.9877 57.1392 7.9877 61.5943C7.9877 66.0495 11.5993 69.6611 16.0545 69.6611Z" fill="white" />
        <path d="M88.4266 17.224C87.3531 17.224 86.3408 17.489 85.4494 17.9549C84.1619 16.366 82.2033 15.4095 80.1318 15.4095H32.7238C29.7025 15.4095 27.1346 17.3804 26.2336 20.1035H24.7543C23.5639 18.3152 21.5594 17.2246 19.3867 17.2246C15.8295 17.2246 12.9357 20.1177 12.9357 23.6738C12.9357 27.231 15.8295 30.125 19.3867 30.125C21.5594 30.125 23.5639 29.0343 24.7543 27.2461H25.8879V59.1289H24.7533C23.6771 55.3373 20.1863 52.5511 16.0545 52.5511C11.0682 52.5511 7.01132 56.608 7.01132 61.5943C7.01132 65.4851 9.48144 68.8097 12.9357 70.083V80.2715C12.9357 84.0408 16.0023 87.1074 19.7717 87.1074H41.6975C42.2369 87.1074 42.674 86.6701 42.674 86.1308C42.674 85.5916 42.2369 85.1543 41.6975 85.1543H19.7715C17.0791 85.1543 14.8887 82.9638 14.8887 80.2715V70.5599C15.2707 70.6093 15.6592 70.6377 16.0543 70.6377C21.0408 70.6377 25.0977 66.5808 25.0977 61.5943C25.0977 61.4222 25.0918 61.2517 25.0822 61.082H57.8496C58.3881 61.082 58.8262 61.5201 58.8262 62.0586V80.2715C58.8262 82.182 59.6141 83.9121 60.8818 85.1537L47.2129 85.1543C46.6734 85.1543 46.2363 85.5916 46.2363 86.1308C46.2363 86.6701 46.6734 87.1074 47.2129 87.1074L66.8955 87.1068C70.6648 87.1068 73.7314 84.0402 73.7314 80.2709V65.8324H84.0381C85.6535 65.8324 86.9678 64.5181 86.9678 62.9027V34.1238C86.9678 33.5845 86.5307 33.1472 85.9912 33.1472C85.4518 33.1472 85.0146 33.5845 85.0146 34.1238V62.9027C85.0146 63.4412 84.5766 63.8793 84.0381 63.8793H73.7314V27.2461H83.058C84.2156 28.9802 86.1894 30.1252 88.4264 30.1252C91.9832 30.1252 94.8768 27.2314 94.8768 23.6746C94.8768 20.1177 91.9834 17.224 88.4266 17.224ZM16.0543 68.6845C12.1447 68.6845 8.96425 65.5039 8.96425 61.5943C8.96425 57.6847 12.1447 54.5043 16.0543 54.5043C19.9639 54.5043 23.1445 57.6849 23.1445 61.5943C23.1445 65.5039 19.9639 68.6845 16.0543 68.6845ZM80.1318 17.3627C81.5805 17.3627 82.9516 18.0185 83.8717 19.1111C83.5687 19.4135 83.2963 19.7461 83.0578 20.1033H74.2275C75.0225 18.4818 76.6898 17.3625 78.6143 17.3625H80.1318V17.3627ZM19.3867 28.1719C16.9066 28.1719 14.8889 26.1539 14.8889 23.6738C14.8889 21.1947 16.9066 19.1777 19.3867 19.1777C20.3922 19.1777 21.3457 19.5138 22.1168 20.1035H22.0195C21.0676 20.1035 20.1707 20.4744 19.4928 21.1494C18.8185 21.824 18.4471 22.7203 18.4471 23.6738C18.4471 25.6435 20.0496 27.2461 22.0193 27.2461H22.1166C21.3457 27.8357 20.3922 28.1719 19.3867 28.1719ZM22.0195 25.2929C21.1268 25.2929 20.4004 24.5666 20.4004 23.6738C20.4004 23.242 20.5685 22.8357 20.8727 22.5318C21.1803 22.2254 21.5877 22.0566 22.0195 22.0566H25.8926C25.8908 22.1195 25.8877 22.1822 25.8877 22.2455V25.2929H22.0195ZM71.7785 80.2709C71.7785 82.9632 69.5881 85.1537 66.8957 85.1537H65.6396C62.9576 85.1414 60.7793 82.9562 60.7793 80.2715V62.0586C60.7793 60.4431 59.465 59.1289 57.8496 59.1289H27.841V22.2455C27.841 19.5531 30.0314 17.3627 32.7238 17.3627H73.8348C72.5666 18.6043 71.7785 20.3345 71.7785 22.2455V80.2709ZM73.7316 25.2929V22.2455C73.7316 22.1822 73.734 22.1193 73.7363 22.0566H82.1814C82.0473 22.5738 81.9758 23.116 81.9758 23.6746C81.9758 24.2334 82.0474 24.7756 82.1816 25.2929H73.7316ZM88.4266 28.172C85.9467 28.172 83.9291 26.1545 83.9291 23.6746C83.9291 21.1947 85.9467 19.1771 88.4266 19.1771C90.9064 19.1771 92.9238 21.1947 92.9238 23.6746C92.9238 26.1545 90.9064 28.172 88.4266 28.172Z" fill="#2626BB" />
        <path d="M16.0545 66.8179C18.9394 66.8179 21.2781 64.4792 21.2781 61.5943C21.2781 58.7094 18.9394 56.3707 16.0545 56.3707C13.1695 56.3707 10.8308 58.7094 10.8308 61.5943C10.8308 64.4792 13.1695 66.8179 16.0545 66.8179Z" fill="#9EAFFD" />
        <path d="M19.2037 65.9326C19.2037 65.0761 18.859 64.2994 18.3023 63.7312C18.859 63.1629 19.2037 62.3861 19.2037 61.5297C19.2037 59.7931 17.7908 58.3802 16.0543 58.3802C14.3178 58.3802 12.9049 59.7931 12.9049 61.5297C12.9049 62.3861 13.2496 63.1629 13.8062 63.7312C13.2496 64.2996 12.9049 65.0763 12.9049 65.9326V66.9652H14.8006V65.9326C14.8006 65.2414 15.3631 64.6791 16.0543 64.6791C16.7455 64.6791 17.308 65.2414 17.308 65.9326V66.9652H19.2037V65.9326ZM16.0545 60.276C16.7457 60.276 17.3082 60.8385 17.3082 61.5297C17.3082 62.2209 16.7457 62.7834 16.0545 62.7834C15.3633 62.7834 14.8008 62.2209 14.8008 61.5297C14.8008 60.8385 15.3631 60.276 16.0545 60.276Z" fill="white" />
        <path d="M80.7871 40.6828C81.3264 40.6828 81.7637 40.2456 81.7637 39.7062C81.7637 39.1669 81.3264 38.7297 80.7871 38.7297C80.2478 38.7297 79.8105 39.1669 79.8105 39.7062C79.8105 40.2456 80.2478 40.6828 80.7871 40.6828Z" fill="white" />
        <path d="M80.7871 37.5154C81.3264 37.5154 81.7637 37.0782 81.7637 36.5388C81.7637 35.9995 81.3264 35.5623 80.7871 35.5623C80.2478 35.5623 79.8105 35.9995 79.8105 36.5388C79.8105 37.0782 80.2478 37.5154 80.7871 37.5154Z" fill="white" />
        <path d="M80.7871 34.348C81.3264 34.348 81.7637 33.9108 81.7637 33.3715C81.7637 32.8321 81.3264 32.3949 80.7871 32.3949C80.2478 32.3949 79.8105 32.8321 79.8105 33.3715C79.8105 33.9108 80.2478 34.348 80.7871 34.348Z" fill="white" />
        <path d="M16.5268 41.757C15.9873 41.757 15.5502 41.3197 15.5502 40.7805C15.5502 40.1881 15.0682 39.7062 14.476 39.7062C13.9365 39.7062 13.4994 39.2689 13.4994 38.7297C13.4994 38.1904 13.9365 37.7531 14.476 37.7531C15.0682 37.7531 15.5502 37.2713 15.5502 36.6789C15.5502 36.1396 15.9873 35.7023 16.5268 35.7023C17.0662 35.7023 17.5033 36.1396 17.5033 36.6789C17.5033 37.2713 17.9854 37.7531 18.5775 37.7531C19.117 37.7531 19.5541 38.1904 19.5541 38.7297C19.5541 39.2689 19.117 39.7062 18.5775 39.7062C17.9854 39.7062 17.5033 40.1881 17.5033 40.7805C17.5033 41.3197 17.0662 41.757 16.5268 41.757Z" fill="#01EBA4" />
        <path d="M86.2852 13.9465C85.7457 13.9465 85.3086 13.5092 85.3086 12.9699C85.3086 12.3775 84.8266 11.8957 84.2344 11.8957C83.6949 11.8957 83.2578 11.4584 83.2578 10.9191C83.2578 10.3799 83.6949 9.94257 84.2344 9.94257C84.8266 9.94257 85.3086 9.46073 85.3086 8.86835C85.3086 8.32909 85.7457 7.89178 86.2852 7.89178C86.8246 7.89178 87.2617 8.32909 87.2617 8.86835C87.2617 9.46073 87.7438 9.94257 88.3359 9.94257C88.8754 9.94257 89.3125 10.3799 89.3125 10.9191C89.3125 11.4584 88.8754 11.8957 88.3359 11.8957C87.7438 11.8957 87.2617 12.3775 87.2617 12.9699C87.2617 13.5092 86.8246 13.9465 86.2852 13.9465Z" fill="#8298FD" />
        <path d="M86.4035 74.5412C86.1537 74.5412 85.9035 74.4459 85.7131 74.2553L83.6623 72.2045C83.2809 71.823 83.2809 71.2047 83.6623 70.8234L85.7131 68.7726C86.0941 68.3914 86.7129 68.3914 87.0939 68.7726L89.1447 70.8234C89.5262 71.2049 89.5262 71.8232 89.1447 72.2045L87.0939 74.2553C86.9033 74.4459 86.6533 74.5412 86.4035 74.5412ZM85.7338 71.5138L86.4035 72.1836L87.0732 71.5138L86.4035 70.8441L85.7338 71.5138Z" fill="#FF7EB7" />
        <path d="M20.1061 49.3164C19.8563 49.3164 19.6061 49.2211 19.4156 49.0305L17.3648 46.9797C16.9834 46.5982 16.9834 45.9799 17.3648 45.5986L19.4156 43.5478C19.7967 43.1666 20.4154 43.1666 20.7965 43.5478L22.8473 45.5986C23.2287 45.9801 23.2287 46.5984 22.8473 46.9797L20.7965 49.0305C20.6061 49.2211 20.3561 49.3164 20.1061 49.3164ZM19.4365 46.2891L20.1063 46.9588L20.776 46.2891L20.1063 45.6193L19.4365 46.2891Z" fill="#FF7EB7" />
        <path d="M80.7871 82.4336C80.5373 82.4336 80.2871 82.3383 80.0967 82.1476L78.0459 80.0969C77.6644 79.7154 77.6644 79.0971 78.0459 78.7158L80.0967 76.665C80.4777 76.2838 81.0965 76.2838 81.4775 76.665L83.5283 78.7158C83.9097 79.0973 83.9097 79.7156 83.5283 80.0969L81.4775 82.1476C81.2869 82.3383 81.0369 82.4336 80.7871 82.4336ZM80.1174 79.4062L80.7871 80.076L81.4568 79.4062L80.7871 78.7365L80.1174 79.4062Z" fill="#8298FD" />
        <defs>
          <linearGradient id="paint0_linear_30122_943" x1="-4.41605" y1="30.6651" x2="106.773" y2="53.4392" gradientUnits="userSpaceOnUse">
            <stop offset="0.0485" stopColor="#D2DEFF" />
            <stop offset="0.9993" stopColor="#DCFDEE" />
          </linearGradient>
        </defs>
      </svg>) : (<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path opacity="0.1" d="M98.3642 41.693C93.289 17.4848 42.8175 37.3938 52.5958 18.8729C56.4957 11.4863 55.5382 2.82461 46.8636 0.629102C12.4472 -8.08164 -23.595 76.7412 25.183 65.702C35.53 63.3602 41.6523 54.04 44.691 59.9105C50.7333 71.584 34.4109 84.9965 40.8466 95.5689C53.3496 116.109 102.113 59.5723 98.3642 41.693Z" fill="url(#paint0_linear_30174_2576)" />
          <path opacity="0.1" d="M88.4264 22.8881C87.2098 22.8881 86.0863 23.2855 85.1775 23.9568C84.158 22.2314 82.2801 21.0728 80.1307 21.0728L32.7236 21.0738C29.8871 21.0738 27.5215 23.0896 26.9807 25.7668H24.2061C23.2814 24.0529 21.4697 22.8883 19.3857 22.8883C16.3625 22.8883 13.9117 25.3391 13.9117 28.3623C13.9117 31.3855 16.3625 33.8363 19.3857 33.8363C21.4697 33.8363 23.2814 32.6717 24.2061 30.9578H26.8643V64.7937H23.9814C23.2828 61.05 20.0004 58.2154 16.0541 58.2154C11.599 58.2154 7.9873 61.8269 7.9873 66.2822C7.9873 69.9953 10.4969 73.1203 13.9115 74.059V84.9588C13.9115 88.1949 16.535 90.8182 19.7709 90.8182H66.8953C70.1314 90.8182 72.7547 88.1949 72.7547 84.9588V69.5437H84.0367C85.1168 69.5437 85.9898 68.6687 85.9898 67.5906V33.2641C86.7238 33.6295 87.5506 33.8361 88.4262 33.8361C91.4494 33.8361 93.9002 31.3854 93.9002 28.3621C93.9002 25.3389 91.4496 22.8881 88.4264 22.8881Z" fill="#2626BB" />
          <path d="M19.3856 29.1486C22.4089 29.1486 24.8597 26.6978 24.8597 23.6746C24.8597 20.6514 22.4089 18.2006 19.3856 18.2006C16.3624 18.2006 13.9116 20.6514 13.9116 23.6746C13.9116 26.6978 16.3624 29.1486 19.3856 29.1486Z" fill="#FFC3DE" />
          <path d="M85.99 22.2447V62.9029C85.99 63.9811 85.117 64.8561 84.0369 64.8561H72.7549L71.7783 62.9029V16.8334L78.6143 16.3852H80.1307C83.367 16.3854 85.99 19.0103 85.99 22.2447Z" fill="#9EAFFD" />
          <path d="M85.9897 23.4594V33.266C84.9761 32.7602 84.1421 31.9516 83.605 30.9574H40.0991V25.766H83.605C84.1421 24.7721 84.9761 23.9635 85.9897 23.4594Z" fill="#8298FD" />
          <path d="M88.6179 26.2701H22.0198C20.5864 26.2701 19.4243 25.1082 19.4243 23.6746C19.4243 22.2412 20.5862 21.0791 22.0198 21.0791H88.6181V26.2701H88.6179Z" fill="#FF7EB7" />
          <path d="M72.7559 49.4082V80.2715C72.7559 83.5078 70.1309 86.1309 66.8965 86.1309H60.584L26.8652 60.1055V49.4082L32.0652 48.4316H67.74L72.7559 49.4082Z" fill="#D1DDFF" />
          <path d="M72.7549 49.4082V22.2455C72.7549 19.0092 75.3779 16.3861 78.6143 16.3861H32.7236C29.4877 16.3861 26.8643 19.0094 26.8643 22.2455V49.4082H72.7549Z" fill="white" />
          <path d="M55.022 45.2035C55.5613 45.2035 55.9985 44.7663 55.9985 44.227C55.9985 43.6876 55.5613 43.2504 55.022 43.2504C54.4826 43.2504 54.0454 43.6876 54.0454 44.227C54.0454 44.7663 54.4826 45.2035 55.022 45.2035Z" fill="#02FFB2" />
          <path d="M58.1895 45.2037C58.7288 45.2037 59.166 44.7665 59.166 44.2271C59.166 43.6878 58.7288 43.2506 58.1895 43.2506C57.6501 43.2506 57.2129 43.6878 57.2129 44.2271C57.2129 44.7665 57.6501 45.2037 58.1895 45.2037Z" fill="#02FFB2" />
          <path d="M61.3569 45.2037C61.8963 45.2037 62.3335 44.7665 62.3335 44.2271C62.3335 43.6878 61.8963 43.2506 61.3569 43.2506C60.8176 43.2506 60.3804 43.6878 60.3804 44.2271C60.3804 44.7665 60.8176 45.2037 61.3569 45.2037Z" fill="#02FFB2" />
          <path d="M36.671 50.3848H33.0415C32.5022 50.3848 32.0649 49.9475 32.0649 49.4082C32.0649 48.8689 32.5022 48.4316 33.0415 48.4316H36.671C37.2103 48.4316 37.6476 48.8689 37.6476 49.4082C37.6476 49.9475 37.2105 50.3848 36.671 50.3848Z" fill="#FF7EB7" />
          <path d="M66.7632 55.9281H33.0415C32.5022 55.9281 32.0649 55.4908 32.0649 54.9516C32.0649 54.4123 32.5022 53.975 33.0415 53.975H66.7632C67.3024 53.975 67.7397 54.4123 67.7397 54.9516C67.7397 55.4908 67.3026 55.9281 66.7632 55.9281Z" fill="#9EAFFD" />
          <path d="M66.7632 59.9088H33.0415C32.5022 59.9088 32.0649 59.4715 32.0649 58.9322C32.0649 58.393 32.5022 57.9557 33.0415 57.9557H66.7632C67.3024 57.9557 67.7397 58.393 67.7397 58.9322C67.7397 59.4715 67.3026 59.9088 66.7632 59.9088Z" fill="#9EAFFD" />
          <path d="M66.7632 63.8895H33.0415C32.5022 63.8895 32.0649 63.4522 32.0649 62.9129C32.0649 62.3736 32.5022 61.9363 33.0415 61.9363H66.7632C67.3024 61.9363 67.7397 62.3736 67.7397 62.9129C67.7397 63.4522 67.3026 63.8895 66.7632 63.8895Z" fill="#9EAFFD" />
          <path d="M66.7632 69.7074H33.0415C32.5022 69.7074 32.0649 69.2701 32.0649 68.7309C32.0649 68.1916 32.5022 67.7543 33.0415 67.7543H66.7632C67.3024 67.7543 67.7397 68.1916 67.7397 68.7309C67.7397 69.2701 67.3026 69.7074 66.7632 69.7074Z" fill="#9EAFFD" />
          <path d="M66.7632 73.6881H33.0415C32.5022 73.6881 32.0649 73.2508 32.0649 72.7115C32.0649 72.1723 32.5022 71.735 33.0415 71.735H66.7632C67.3024 71.735 67.7397 72.1723 67.7397 72.7115C67.7397 73.2508 67.3026 73.6881 66.7632 73.6881Z" fill="#9EAFFD" />
          <path d="M62.8569 77.6689H33.0415C32.5022 77.6689 32.0649 77.2316 32.0649 76.6924C32.0649 76.1531 32.5022 75.7158 33.0415 75.7158H62.8569C63.3962 75.7158 63.8335 76.1531 63.8335 76.6924C63.8335 77.2316 63.3964 77.6689 62.8569 77.6689Z" fill="#9EAFFD" />
          <path d="M65.6616 86.1312L60.5835 86.1311L47.6929 85.1535H29.146L24.8491 86.1295L19.771 86.1293C16.5347 86.1293 13.9116 83.5062 13.9116 80.2699V62.059C13.9116 60.9809 14.7866 60.1059 15.8647 60.1059H57.8491C58.9272 60.1059 59.8022 60.9809 59.8022 62.059V80.2719C59.8022 83.5084 62.4253 86.1312 65.6616 86.1312Z" fill="white" />
          <path d="M24.1206 66.2816C24.1206 70.7367 20.5093 74.348 16.0542 74.348C15.312 74.348 14.5933 74.2484 13.9116 74.059V62.059C13.9116 60.9809 14.7866 60.1059 15.8647 60.1059H21.2437C23.0034 61.5865 24.1206 63.8031 24.1206 66.2816Z" fill="#D1DDFF" />
          <path d="M60.5835 86.1312L24.8491 86.1293C21.6128 86.1293 18.9897 83.5062 18.9897 80.2699V66.3559C18.9897 65.7094 19.5151 65.184 20.1616 65.184H53.5522C54.1987 65.184 54.7241 65.7094 54.7241 66.3559V80.2719C54.7241 83.5084 57.3472 86.1312 60.5835 86.1312Z" fill="#D1DDFF" />
          <path d="M24.1206 66.2816C24.1206 69.7016 21.9937 72.6234 18.9897 73.7973V66.3559C18.9897 65.7094 19.5151 65.184 20.1616 65.184H24.0464C24.0952 65.5436 24.1206 65.9088 24.1206 66.2816Z" fill="#B6C4FF" />
          <path d="M88.4262 29.1486C91.4494 29.1486 93.9002 26.6978 93.9002 23.6746C93.9002 20.6514 91.4494 18.2006 88.4262 18.2006C85.4029 18.2006 82.9521 20.6514 82.9521 23.6746C82.9521 26.6978 85.4029 29.1486 88.4262 29.1486Z" fill="#FFC3DE" />
          <path d="M88.4261 25.6977C87.3104 25.6977 86.4028 24.7902 86.4028 23.6746C86.4028 22.559 87.3102 21.6516 88.4261 21.6516C89.5415 21.6516 90.4489 22.559 90.4489 23.6746C90.4489 24.7902 89.5415 25.6977 88.4261 25.6977Z" fill="#FFA7CE" />
          <path d="M49.5802 45.2037H33.2368C32.5896 45.2037 32.0649 44.6791 32.0649 44.0318V22.6455C32.0649 21.9982 32.5896 21.4736 33.2368 21.4736H49.5802C50.2274 21.4736 50.7521 21.9982 50.7521 22.6455V44.0318C50.7521 44.6789 50.2274 45.2037 49.5802 45.2037Z" fill="#6583FE" />
          <path d="M45.4583 38.384C45.1866 38.2164 44.8318 38.2871 44.6462 38.5467C44.0126 39.4332 42.6267 41.1781 42.2466 40.066C41.6757 38.3951 46.2978 30.2256 42.2835 28.9125C39.6927 28.0648 37.8466 30.5236 37.1593 31.6479C36.9847 31.9334 37.0733 32.3061 37.3583 32.4818C37.63 32.6494 37.9849 32.5787 38.1704 32.3191C38.804 31.4326 40.19 29.6877 40.57 30.7998C41.1409 32.4707 36.5189 40.64 40.5331 41.9533C43.1239 42.801 44.97 40.3422 45.6573 39.218C45.8319 38.9324 45.7433 38.5598 45.4583 38.384Z" fill="white" />
          <path d="M41.4085 27.799C42.3059 27.799 43.0333 27.0716 43.0333 26.1742C43.0333 25.2769 42.3059 24.5494 41.4085 24.5494C40.5111 24.5494 39.7837 25.2769 39.7837 26.1742C39.7837 27.0716 40.5111 27.799 41.4085 27.799Z" fill="white" />
          <path d="M58.6515 23.5732H55.022C54.4827 23.5732 54.0454 23.1359 54.0454 22.5967C54.0454 22.0574 54.4827 21.6201 55.022 21.6201H58.6515C59.1907 21.6201 59.628 22.0574 59.628 22.5967C59.628 23.1359 59.1907 23.5732 58.6515 23.5732Z" fill="#FF7EB7" />
          <path d="M66.771 29.1166H55.022C54.4827 29.1166 54.0454 28.6793 54.0454 28.14C54.0454 27.6008 54.4827 27.1635 55.022 27.1635H66.771C67.3103 27.1635 67.7476 27.6008 67.7476 28.14C67.7476 28.6793 67.3104 29.1166 66.771 29.1166Z" fill="#D1DDFF" />
          <path d="M66.771 33.0973H55.022C54.4827 33.0973 54.0454 32.66 54.0454 32.1207C54.0454 31.5814 54.4827 31.1441 55.022 31.1441H66.771C67.3103 31.1441 67.7476 31.5814 67.7476 32.1207C67.7476 32.66 67.3104 33.0973 66.771 33.0973Z" fill="#D1DDFF" />
          <path d="M66.771 37.0779H55.022C54.4827 37.0779 54.0454 36.6406 54.0454 36.1014C54.0454 35.5621 54.4827 35.1248 55.022 35.1248H66.771C67.3103 35.1248 67.7476 35.5621 67.7476 36.1014C67.7476 36.6406 67.3104 37.0779 66.771 37.0779Z" fill="#D1DDFF" />
          <path d="M62.8647 41.0588H55.022C54.4827 41.0588 54.0454 40.6215 54.0454 40.0822C54.0454 39.543 54.4827 39.1057 55.022 39.1057H62.8647C63.404 39.1057 63.8413 39.543 63.8413 40.0822C63.8413 40.6215 63.4042 41.0588 62.8647 41.0588Z" fill="#D1DDFF" />
          <path d="M16.0546 69.6611C20.5098 69.6611 24.1214 66.0495 24.1214 61.5943C24.1214 57.1392 20.5098 53.5275 16.0546 53.5275C11.5994 53.5275 7.98779 57.1392 7.98779 61.5943C7.98779 66.0495 11.5994 69.6611 16.0546 69.6611Z" fill="white" />
          <path d="M88.4265 17.224C87.353 17.224 86.3407 17.4891 85.4493 17.9549C84.1618 16.366 82.2032 15.4096 80.1317 15.4096H32.7237C29.7024 15.4096 27.1345 17.3805 26.2335 20.1035H24.7542C23.5638 18.3152 21.5593 17.2246 19.3866 17.2246C15.8294 17.2246 12.9356 20.1178 12.9356 23.6738C12.9356 27.2311 15.8294 30.125 19.3866 30.125C21.5593 30.125 23.5638 29.0344 24.7542 27.2461H25.8878V59.1289H24.7532C23.6771 55.3373 20.1862 52.5512 16.0544 52.5512C11.0681 52.5512 7.01123 56.608 7.01123 61.5943C7.01123 65.4852 9.48135 68.8098 12.9356 70.083V80.2715C12.9356 84.0408 16.0022 87.1074 19.7716 87.1074H41.6974C42.2368 87.1074 42.6739 86.6701 42.6739 86.1309C42.6739 85.5916 42.2368 85.1543 41.6974 85.1543H19.7714C17.079 85.1543 14.8886 82.9639 14.8886 80.2715V70.56C15.2706 70.6094 15.6591 70.6377 16.0542 70.6377C21.0407 70.6377 25.0976 66.5809 25.0976 61.5943C25.0976 61.4223 25.0917 61.2518 25.0821 61.082H57.8495C58.388 61.082 58.8261 61.5201 58.8261 62.0586V80.2715C58.8261 82.182 59.614 83.9121 60.8817 85.1537L47.2128 85.1543C46.6733 85.1543 46.2362 85.5916 46.2362 86.1309C46.2362 86.6701 46.6733 87.1074 47.2128 87.1074L66.8954 87.1068C70.6647 87.1068 73.7313 84.0402 73.7313 80.2709V65.8324H84.038C85.6534 65.8324 86.9677 64.5182 86.9677 62.9027V34.1238C86.9677 33.5846 86.5306 33.1473 85.9911 33.1473C85.4517 33.1473 85.0145 33.5846 85.0145 34.1238V62.9027C85.0145 63.4412 84.5765 63.8793 84.038 63.8793H73.7313V27.2461H83.0579C84.2155 28.9803 86.1894 30.1252 88.4263 30.1252C91.9831 30.1252 94.8767 27.2314 94.8767 23.6746C94.8767 20.1178 91.9833 17.224 88.4265 17.224ZM16.0542 68.6846C12.1446 68.6846 8.96416 65.5039 8.96416 61.5943C8.96416 57.6848 12.1446 54.5043 16.0542 54.5043C19.9638 54.5043 23.1444 57.685 23.1444 61.5943C23.1444 65.5039 19.9638 68.6846 16.0542 68.6846ZM80.1317 17.3627C81.5804 17.3627 82.9515 18.0186 83.8716 19.1111C83.5686 19.4135 83.2962 19.7461 83.0577 20.1033H74.2274C75.0224 18.4818 76.6897 17.3625 78.6142 17.3625H80.1317V17.3627ZM19.3866 28.1719C16.9065 28.1719 14.8888 26.1539 14.8888 23.6738C14.8888 21.1947 16.9065 19.1777 19.3866 19.1777C20.3921 19.1777 21.3456 19.5139 22.1167 20.1035H22.0194C21.0675 20.1035 20.1706 20.4744 19.4927 21.1494C18.8185 21.824 18.447 22.7203 18.447 23.6738C18.447 25.6436 20.0495 27.2461 22.0192 27.2461H22.1165C21.3456 27.8357 20.3921 28.1719 19.3866 28.1719ZM22.0194 25.293C21.1267 25.293 20.4003 24.5666 20.4003 23.6738C20.4003 23.242 20.5685 22.8357 20.8726 22.5318C21.1802 22.2254 21.5876 22.0566 22.0194 22.0566H25.8925C25.8907 22.1195 25.8876 22.1822 25.8876 22.2455V25.293H22.0194ZM71.7784 80.2709C71.7784 82.9633 69.588 85.1537 66.8956 85.1537H65.6395C62.9575 85.1414 60.7792 82.9562 60.7792 80.2715V62.0586C60.7792 60.4432 59.4649 59.1289 57.8495 59.1289H27.8409V22.2455C27.8409 19.5531 30.0313 17.3627 32.7237 17.3627H73.8347C72.5665 18.6043 71.7784 20.3346 71.7784 22.2455V80.2709ZM73.7315 25.293V22.2455C73.7315 22.1822 73.7339 22.1193 73.7362 22.0566H82.1814C82.0472 22.5738 81.9757 23.116 81.9757 23.6746C81.9757 24.2334 82.0474 24.7756 82.1815 25.293H73.7315ZM88.4265 28.1721C85.9466 28.1721 83.929 26.1545 83.929 23.6746C83.929 21.1947 85.9466 19.1771 88.4265 19.1771C90.9063 19.1771 92.9237 21.1947 92.9237 23.6746C92.9237 26.1545 90.9063 28.1721 88.4265 28.1721Z" fill="#2626BB" />
          <path d="M16.0542 66.818C18.9391 66.818 21.2778 64.4793 21.2778 61.5943C21.2778 58.7094 18.9391 56.3707 16.0542 56.3707C13.1693 56.3707 10.8306 58.7094 10.8306 61.5943C10.8306 64.4793 13.1693 66.818 16.0542 66.818Z" fill="#9EAFFD" />
          <path d="M19.2036 65.9326C19.2036 65.0762 18.8589 64.2994 18.3022 63.7313C18.8589 63.1629 19.2036 62.3861 19.2036 61.5297C19.2036 59.7932 17.7907 58.3803 16.0542 58.3803C14.3177 58.3803 12.9048 59.7932 12.9048 61.5297C12.9048 62.3861 13.2495 63.1629 13.8062 63.7313C13.2495 64.2996 12.9048 65.0764 12.9048 65.9326V66.9652H14.8005V65.9326C14.8005 65.2414 15.363 64.6791 16.0542 64.6791C16.7454 64.6791 17.3079 65.2414 17.3079 65.9326V66.9652H19.2036V65.9326ZM16.0544 60.276C16.7456 60.276 17.3081 60.8385 17.3081 61.5297C17.3081 62.2209 16.7456 62.7834 16.0544 62.7834C15.3632 62.7834 14.8007 62.2209 14.8007 61.5297C14.8007 60.8385 15.363 60.276 16.0544 60.276Z" fill="white" />
          <path d="M80.7871 40.6828C81.3264 40.6828 81.7637 40.2456 81.7637 39.7062C81.7637 39.1669 81.3264 38.7297 80.7871 38.7297C80.2478 38.7297 79.8105 39.1669 79.8105 39.7062C79.8105 40.2456 80.2478 40.6828 80.7871 40.6828Z" fill="white" />
          <path d="M80.7871 37.5154C81.3264 37.5154 81.7637 37.0782 81.7637 36.5389C81.7637 35.9995 81.3264 35.5623 80.7871 35.5623C80.2478 35.5623 79.8105 35.9995 79.8105 36.5389C79.8105 37.0782 80.2478 37.5154 80.7871 37.5154Z" fill="white" />
          <path d="M80.7871 34.348C81.3264 34.348 81.7637 33.9108 81.7637 33.3715C81.7637 32.8321 81.3264 32.3949 80.7871 32.3949C80.2478 32.3949 79.8105 32.8321 79.8105 33.3715C79.8105 33.9108 80.2478 34.348 80.7871 34.348Z" fill="white" />
          <path d="M16.5269 41.757C15.9874 41.757 15.5503 41.3197 15.5503 40.7805C15.5503 40.1881 15.0683 39.7063 14.4761 39.7063C13.9366 39.7063 13.4995 39.2689 13.4995 38.7297C13.4995 38.1904 13.9366 37.7531 14.4761 37.7531C15.0683 37.7531 15.5503 37.2713 15.5503 36.6789C15.5503 36.1397 15.9874 35.7023 16.5269 35.7023C17.0663 35.7023 17.5034 36.1397 17.5034 36.6789C17.5034 37.2713 17.9854 37.7531 18.5776 37.7531C19.1171 37.7531 19.5542 38.1904 19.5542 38.7297C19.5542 39.2689 19.1171 39.7063 18.5776 39.7063C17.9854 39.7063 17.5034 40.1881 17.5034 40.7805C17.5034 41.3197 17.0663 41.757 16.5269 41.757Z" fill="#01EBA4" />
          <path d="M86.2852 13.9465C85.7457 13.9465 85.3086 13.5092 85.3086 12.9699C85.3086 12.3775 84.8266 11.8957 84.2344 11.8957C83.6949 11.8957 83.2578 11.4584 83.2578 10.9191C83.2578 10.3799 83.6949 9.94258 84.2344 9.94258C84.8266 9.94258 85.3086 9.46074 85.3086 8.86836C85.3086 8.3291 85.7457 7.8918 86.2852 7.8918C86.8246 7.8918 87.2617 8.3291 87.2617 8.86836C87.2617 9.46074 87.7438 9.94258 88.3359 9.94258C88.8754 9.94258 89.3125 10.3799 89.3125 10.9191C89.3125 11.4584 88.8754 11.8957 88.3359 11.8957C87.7438 11.8957 87.2617 12.3775 87.2617 12.9699C87.2617 13.5092 86.8246 13.9465 86.2852 13.9465Z" fill="#8298FD" />
          <path d="M86.4033 74.5412C86.1535 74.5412 85.9033 74.4459 85.7128 74.2553L83.6621 72.2045C83.2806 71.823 83.2806 71.2047 83.6621 70.8234L85.7128 68.7727C86.0939 68.3914 86.7126 68.3914 87.0937 68.7727L89.1445 70.8234C89.5259 71.2049 89.5259 71.8232 89.1445 72.2045L87.0937 74.2553C86.9031 74.4459 86.6531 74.5412 86.4033 74.5412ZM85.7335 71.5139L86.4033 72.1836L87.073 71.5139L86.4033 70.8441L85.7335 71.5139Z" fill="#FF7EB7" />
          <path d="M20.1059 49.3164C19.8561 49.3164 19.6059 49.2211 19.4155 49.0305L17.3647 46.9797C16.9833 46.5982 16.9833 45.9799 17.3647 45.5986L19.4155 43.5479C19.7965 43.1666 20.4153 43.1666 20.7963 43.5479L22.8471 45.5986C23.2286 45.9801 23.2286 46.5984 22.8471 46.9797L20.7963 49.0305C20.6059 49.2211 20.3559 49.3164 20.1059 49.3164ZM19.4364 46.2891L20.1061 46.9588L20.7758 46.2891L20.1061 45.6193L19.4364 46.2891Z" fill="#FF7EB7" />
          <path d="M80.7871 82.4336C80.5373 82.4336 80.2871 82.3383 80.0966 82.1477L78.0458 80.0969C77.6644 79.7154 77.6644 79.0971 78.0458 78.7158L80.0966 76.665C80.4777 76.2838 81.0964 76.2838 81.4775 76.665L83.5283 78.7158C83.9097 79.0973 83.9097 79.7156 83.5283 80.0969L81.4775 82.1477C81.2869 82.3383 81.0369 82.4336 80.7871 82.4336ZM80.1173 79.4063L80.7871 80.076L81.4568 79.4063L80.7871 78.7365L80.1173 79.4063Z" fill="#8298FD" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_30174_2576" x1="-4.4159" y1="30.6651" x2="106.773" y2="53.4392" gradientUnits="userSpaceOnUse">
            <stop offset="0.0485" stopColor="#D2DEFF" />
            <stop offset="0.9993" stopColor="#DCFDEE" />
          </linearGradient>
        </defs>
      </svg>
      )}
    </div>
  )
}

export default DevelopmentSvg
