window.ABIS = {
  "IXRegistry": [
    "event Approval(address indexed,address indexed,uint256 indexed)",
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event Flag(uint256 indexed,uint256)",
    "event InviteAccept(uint256 indexed,uint256 indexed)",
    "event InviteSend(uint256 indexed,uint256 indexed)",
    "event Mint(address indexed,address indexed,uint256 indexed,string)",
    "event Sync(address indexed,address indexed,uint256 indexed,string)",
    "event Transfer(address indexed,address indexed,uint256 indexed)",
    "function approve(address,uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function getApproved(uint256) view returns (address)",
    "function getEIP6551Address(uint256) view returns (address)",
    "function getFlag(uint256,uint8) view returns (uint8)",
    "function getReferrer(uint256) view returns (uint256)",
    "function getReferrerCount(uint256) view returns (uint256)",
    "function imageURI(uint256) view returns (string)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function mint(uint64,uint256,string,string,bytes) returns (address)",
    "function optionalOwnerOf(uint256) view returns (address)",
    "function ownerOf(uint256) view returns (address)",
    "function safeTransferFrom(address,address,uint256)",
    "function safeTransferFrom(address,address,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function setReferrer(uint256,uint256) returns (bool)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function sync(uint64,uint256,string,string,bytes)",
    "function transferFrom(address,address,uint256)"
  ],
  "IXAirdrop": [
    "event AirdropClaim(uint256 indexed,bytes32 indexed,address,uint256,uint256,address,uint32)",
    "event AirdropCreate(uint256 indexed,bytes32 indexed,address indexed,address,uint256,uint32,uint64)",
    "event AirdropWithdraw(uint256 indexed,address indexed,address,uint256)",
    "function claim(uint256,uint256,uint32,uint256,bytes32[])",
    "function create(bytes32,address,uint256,uint32,uint32) returns (uint256)",
    "function getAirdrop(uint256) view returns (tuple(bytes32,address,address,uint256,address,address,uint256,uint32,uint32,uint32))",
    "function isClaimed(uint256,uint32) view returns (bool)",
    "function withdraw(uint256)"
  ],
  "IERC1155": [
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event TransferBatch(address indexed,address indexed,address indexed,uint256[],uint256[])",
    "event TransferSingle(address indexed,address indexed,address indexed,uint256,uint256)",
    "event URI(string,uint256 indexed)",
    "function balanceOf(address,uint256) view returns (uint256)",
    "function balanceOfBatch(address[],uint256[]) view returns (uint256[])",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)",
    "function safeTransferFrom(address,address,uint256,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function supportsInterface(bytes4) view returns (bool)"
  ],
  "IXPay": [
    "event Pay(uint256 indexed,address indexed,uint256 indexed,address,bool,address,uint256,uint256)",
    "function getFee(uint256) view returns (uint256)",
    "function pay(address,uint256,uint256,uint256) payable returns (uint256)",
    "function payEther(uint256,uint256) payable returns (uint256)"
  ],
  "IERC721": [
    "event Approval(address indexed,address indexed,uint256 indexed)",
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event Transfer(address indexed,address indexed,uint256 indexed)",
    "function approve(address,uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function getApproved(uint256) view returns (address)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function ownerOf(uint256) view returns (address)",
    "function safeTransferFrom(address,address,uint256)",
    "function safeTransferFrom(address,address,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function transferFrom(address,address,uint256)"
  ],
  "IERC20": [
    "event Approval(address indexed,address indexed,uint256)",
    "event Transfer(address indexed,address indexed,uint256)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function allowance(address,address) view returns (uint256)",
    "function approve(address,uint256) returns (bool)",
    "function balanceOf(address) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function transfer(address,uint256) returns (bool)",
    "function transferFrom(address,address,uint256) returns (bool)"
  ]
}