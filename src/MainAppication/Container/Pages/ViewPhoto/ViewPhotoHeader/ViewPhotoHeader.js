import React, {useEffect, useState} from "react";
import {User} from "../../../../Components/User/User";
import {Views} from "../../../../Components/Icons/Views";
import {FilledLike} from "../../../../Components/Icons/FilledLike";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../../UrlsConst";
import {AiOutlineClose} from "react-icons/all";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";

export const ViewPhotoHeader = (props) => {
    const [user, userSet] = useState({});
    let picture = props.picture;
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_URL}/api/user/shortinfo/${picture?.owner ?? 0}`;
        fetchGet(userSet, url);
    },[picture?.owner]);

    let date = new Date(picture?.created_at);

    return(
        <div className="photo-modal__header">
            <div className="photo-modal__header__user-profile">
                <User name={user?.username} img={`${process.env.REACT_APP_API_URL}${user?.profile_pic ?? 
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADKCAMAAABQfxahAAAAMFBMVEX29vbHx8fExMTX19f5+fnt7e3R0dHh4eHw8PD19fXn5+fLy8vT09Pd3d3l5eXg4OBxvuVsAAAE9UlEQVR4nO2d6ZajIBBGBUFFXN7/badj95yAWSzAtor0d/9OxsMNkaUoqpsGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzG0OBu5tkYN85Td8zU9sMnyRs3K60VCa07+zHupldE7R/5yXE3+SSmJO+Nz+j2Ll1cacvd6nJMmyH+xcDd8GLGPHHVVf9793niSo/cLS8kt8ur73TT5YorXfebPmR3udJzzZ1u1nxzpao2zx3ftk6veU63JV2u2no73bQl4kpVvHwvE9cLd/vJ7KMM+ZP5N10NYQtjnF36tY/In8x/mKPHrf0yDo0sfTPMXj9SKq6ePbMd5cibYTrBkv51+EWIupkv1P5270QE65y/WvzmPvKrD9drb+o9t7orWZ8WqTO/7AW70GJ11mV92V6sEM/Z6Y5RXOmVT/36+SyGTbxpeMUZdzQLrzlfkLJ0+12M5trAF8WaTjHnisk7ZnG+0b0gpHySOVdguiC+uO20/Rdl23iuGGWuuVbTaoefAJOzS+tz7asy16q1TRxRM2bo87a6FZlrvzyNJRljc87ZqzHXfnwdP73FtD7VXM/vn2ds6m++DnPtCWk/iT/5Ksz1RHmkSdsK1GBOXXQY+2Hm9NWWSQlpyjdPWmYmqIs3148tNI2z4zjawT3Mc4b+jYo373b/0TRj+/8cTnXr/sCEPsyJN4+znLbM5+BfH7ObyXmTws13ZwJmfcx81pOLHWji0s3jaNnwfJ22+3qIOQeyzaOMvtfTdTz8E89uZJuHrXs3bMcTQPqzr4TUuqjL307VUa/TOl20+RQ27n2wNjoUJ73pks3DwPDhZBXFzykhbcnmKuXz4atOOrOTbB66HL+64aCQ+PRLIbQtPPRLVTn+tGjzeyfSTuHub7qZqjZXaX0YDoiUF12webByTV6bEOY1weZB03qSuU/6quSaB8sy6mH7/UUnJOEINr/n61EGLBUvZqo2v09qxN1XOBnAvErz/u5B/LUHq7iqzf/sCBc0jZgo6u+PJySjCDaf/uxKJliYkDKpwiGR8CMRbK7TdiDR0F73jiUMyVDiS8HbYQhflGDzKDJxHF8Ks/Urj0yEYzWh04OtXfXRqLAXD5dx4TKGlFQr2Txq3MHwHqWxJj/8SmgnDcHm6/3JuA5D87Qln2zz6OTkzcm4jk7ZadnEos3j44PX6nHuFHGVL9s8bp6xz+uG7TJpch59IdTMgfhKnXtyxrTPEqTelhBuHs3pNy27u7Stfb/7BPU2mHTzh9So6KK+f7hKT0+Okm7+5L7JltG/znP/rHwCPSFOvPmLi8MvamYkXG+Wb55yUz7lXncF5vTr4kkX2mswJ6a+pqU612H+tTp1h+00tMO3ysy/OHjZzZBaJrQa87fle41Lv81ejfltX/LC3bgn6bCfZH7r9+Uhpf12Wy3DuzLzLat7tu5e/8suedr1mW/yWvmpbdup8yVXcrnM/+4tbKbCSYE51817yinI75pzVVsgJgP8ojlbGeDEtebp8NVPYi2exFo+ibmgDFs5mYZ5XmMtec1bMovP+wZfGSHuov5sqxn28u4JF4fPFecv9J10U/48ce4e33AZf2On0PsornUVZry02K1Ws6DC7uOkzqhgfWyttV+PY7hXYhrbz+2vs46DxCruxL+aVwS3IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Br+AYSFRdOsVUwBAAAAAElFTkSuQmCC" }`}/>
            </div>
            <div className="photo-modal__header__information">
                <div className="photo-modal__header__information__stats">
                    <div className="photo-modal__header__information__stats__counter">
                        <div className="photo-modal__header__information__stats__counter__views">
                            <Views/>
                            <p>125</p>
                        </div>
                        <div className="photo-modal__header__information__stats__counter__likes">
                            <FilledLike/>
                            <p>125</p>
                        </div>
                    </div>
                    <div className="photo-modal__header__information__stats__date">
                        <p>Published<span>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</span></p>
                    </div>
                </div>
                    <MoreOptions/>
                <div className="photo-modal__header__information__close-button">
                        <AiOutlineClose style={{transform: "scale(3, 3)", marginTop: "-20px"}}
                                        onClick={props.onClick}/>
                </div>
            </div>
        </div>
    );
};
