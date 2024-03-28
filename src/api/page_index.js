import { http } from "@/utils/http.js"

export const getRecruitCardInfoApi = () => {
    return http(
        {
            method: "GET",
            url: "https://mock.apifox.com/m2/3949903-0-default/148197154?apifoxResponseId=399612688",
            data: {}
        }
    )
}

export const getMeetCardInfoApi = () => {
    return http(
        {
            method: "GET",
            url: "https://mock.apifox.com/m2/3949903-0-default/148197154",
            data: {}
        }
    )
}