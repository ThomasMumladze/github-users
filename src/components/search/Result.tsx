import "./Search";

import { personData } from "../personData";

interface Props {
    isDarkMode: boolean;
    userData: [] | null | [{}];
}

const Result = (props: Props) => {
    const { isDarkMode, userData } = props;

    if (userData == null) return [];

    return (
        <div className="result" style={{ backgroundColor: !isDarkMode ? "#FFF" : "#1e2a47" }}>
            <div className="user-container">
                {userData &&
                    userData.map((item: any, index: any) => (
                        <div key={index}>
                            <personData.UserImage img={item.avatar_url} />
                            <div className="user-data">
                                <personData.FullName
                                    isDarkMode={isDarkMode}
                                    fullName={item.name}
                                    registerDate={item.created_at}
                                />
                                <personData.UserName userName={item.login} />
                                <personData.Bio bio={item.bio} isDarkMode={isDarkMode} />
                                <personData.Audience
                                    isDarkMode={isDarkMode}
                                    repos={item.public_repos}
                                    followers={item.followers}
                                    following={item.following}
                                />
                                <personData.Networking
                                    twitterUsername={item.twitter_username}
                                    location={item.location}
                                    profileUrl={item.html_url}
                                    company={item.company}
                                    isDarkMode={isDarkMode}
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Result;
