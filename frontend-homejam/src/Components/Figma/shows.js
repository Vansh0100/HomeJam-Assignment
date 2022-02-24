// importing the required icons from react-icons package
import { HiOutlineTicket, HiTicket } from "react-icons/hi";
import { MdOutlineTouchApp } from "react-icons/md";

const shows = [
  {
    src: "https://s3-alpha-sig.figma.com/img/c153/d9e4/575af0a0c47fbc35f8befa545523b022?Expires=1646611200&Signature=FVXM8KlxvKOzpdZXi-prWzEkq1kjy7yvR2OefQNQhyRS-fE2tA55WfD5kEINExNtDOPJegdCmSKCccGvaOggY99xDxk13XosFedhd40Ad8o3VnuF6WxQEJ9DzXHDJl6qibT8H3zjDIlb8jzrHBT7owN1uDensA~YbkwqqLbU6~WgkadGwbTp7uEcEDwDkqZHubr8DKBcyC5H4Q8vOkwUeAlawcC8bK9cNEwf7u2DLnUK6qgxhwnuuugNcrEii9Wb2kZFTClPpt1pZOr2R-GKrtjj8cUTmXYBF7Q61tp716VEH7VcqUjOUivYTnM8MK1gZx~XyyLIx2Y7fgYVTzocug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    category: "Folk",
    name: "Benny Dayal",
    ticket: <HiOutlineTicket className="inline ml-4 w-8 h-8 text-purple-500" />,
    finger: null,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/00aa/184e/14e65dbe5f4c4ac8365460fb81c2d274?Expires=1646611200&Signature=R7zm2KdIDshDZKAYynrmWaBDUhXgdZ3r2s9sXGlCSve6vMDrtnO5Igz6ErNMJ3SEEjazwWQpJKc-tkuo1PQeD8EqzxLYm72OYucthRKbTrvUbYd~svwnLacQ2Z2oqGXsAjH0Ak3Rtk9uHYZN0gRrpOdbFFfkIE3j94WwC6pwDw~SMc7IRF3rCKC~rLDOo2AKNe~bVODu4zDT66AaTFT~ueqcxq3UC6Cmu9Js7iygadZY9HLWKef1OXKKc70Wilk5NIMWfP1Z523~r9XEgns4-A5bW7LQ~aYM0X7l0j7pm52l4A8Q5BfBLJGWPEeHhqSnuWcwca7E37eOL7nwWhZeZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    category: "Bollywood",
    name: "Vijay Yesudas",
    ticket: <HiOutlineTicket className="inline ml-4 w-8 h-8 text-purple-500" />,
    finger: (
      <MdOutlineTouchApp className="text-white w-16 h-16 relative left-8 bottom-4 " />
    ),
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/dcc6/2cf7/c3f15ae722813c8d9985de4d6bd6509f?Expires=1646611200&Signature=VSRYpkNPvBCZSQCAh6ylwFgh5GF0UJ6dE7D9K4RgaNqGNB1-Qdi3m6YDkLFc~p0mhxvafRHMvECnVyBaXQZYnUqkxtvugGGu7AdaFFsqmn9DAYZWSGxN~VKfa6eMaWwIjFoou9HDjG9hrkT5ZZGwy5edFV1LjzJO3BvkJoZS29VFyKlbicYZdkiuO-A~4l4urC~mTScFtPMh4QKvzRImWQRWVEjaUnEI7oa0wRj2g~s8j8ltlQjVSxbR2maKKYT6hEK5c8K9HA0mhkK0NS1CMT9KMS80MLHBjAQR5A6XOayybqFJzHf4VESAfmBV52Qm~4i6zJkf~XvFqzLbaiMN6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    category: "Folk",
    name: "Andrea Jeremiah",
    ticket: <HiOutlineTicket className="inline ml-4 w-8 h-8 text-purple-500" />,
    finger: null,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/64a1/8b66/bd57fcd0d6a0d45a30dc2426856835dd?Expires=1646611200&Signature=YdeW4MdrAHlRfe2a7U-GFFaDmlNtC8L-FoPPN5QC0QmEtdKRUi3WyCzXrcsNgIQl2fwgjEqnsi2y9TMbQEN~auITS2BxnfCtnpAw9IsAVQsBfTUGEjyakojpsN7XNugDyr7r2ToVP6QK7PYnnswJSWLVE-K9hHVJZeDS4Yy6WDm0sF9iFmyJGWi9iLgWLqWi5LemwumfB9g0J3Ewox3f1N8bVi8r4Ejh6KJI5sGiN4~8SJSWG9MooBAEocMisjXbE3uDvFNh4yrd95l8k0Rxg0KY7JuG-sW70Oc~dtK62YfCyvCaWMY09KjkAejT055GV-rJmz40ukVYNe3OBZvlhA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    category: "Folk",
    name: "Shilpa Rao",
    ticket: <HiTicket className="inline ml-4 w-8 h-8 text-purple-500" />,
    finger: (
      <MdOutlineTouchApp className="text-white w-16 h-16 relative left-40 bottom-4 " />
    ),
  },
];
export default shows;
