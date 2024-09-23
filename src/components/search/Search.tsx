import "./style.scss";
import * as Icon from "react-bootstrap-icons";

import { Loading } from "../loading/Loading";
import Result from "./Result";

import { useEffect, useState } from "react";
import { gitHubUsers } from "../../api/api";

interface Props {
    isDarkMode: boolean;
}

export const Search = (props: Props) => {
    const { isDarkMode } = props;

    const [userName, setUserName] = useState("");
    const [userData, setUserData] = useState<[] | null | [{}]>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean | null>(null);

    const handleDataRequest = () => {
        setLoading(true);
        if (userName === "") {
            setTimeout(() => {
                setLoading(false);
                setError("no result");
                setUserData(null);
            }, 550);
        } else {
            gitHubUsers(userName)
                .then((user: any) => {
                    setTimeout(() => {
                        setUserData([{ ...user.data }]);
                        setLoading(false);
                        setError("");
                    }, 550);
                })
                .catch((err: any) => {
                    setTimeout(() => {
                        setLoading(false);
                        if (err.response && err.response.status === 404) {
                            setError("User not found");
                        } else {
                            setError("An unexpected error occurred");
                        }
                        setUserData(null);
                    }, 550);
                });
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleDataRequest();
            }

            if (event.key === "Escape") {
                setUserName("");
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleDataRequest]);

    return (
        <div className="search">
            <div
                className="search-field"
                style={{
                    backgroundColor: !isDarkMode ? "#FFF" : "#1e2a47",
                    boxShadow: !isDarkMode ? "" : "none",
                    marginBottom: loading ? "0px" : "45px",
                }}
            >
                <Icon.Search width={26} height={26} fill="dodgerblue" style={{ marginLeft: "25px" }} />
                <input
                    style={{ color: isDarkMode ? "#FFF" : "#000", marginLeft: "4px" }}
                    type="text"
                    placeholder="Search GitHub username..."
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <p className="errorBox">{error}</p>
                <button onClick={handleDataRequest} style={{ backgroundColor: isDarkMode ? "#0061cf" : "" }}>
                    Search
                </button>
            </div>
            {loading ? (
                <div className="loading">
                    {" "}
                    <Loading />
                </div>
            ) : null}
            <Result isDarkMode={isDarkMode} userData={userData} />
        </div>
    );
};
