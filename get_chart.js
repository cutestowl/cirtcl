async function get_chart(url)
{
    try
    {
        const response=await fetch(url);
        if(!response.ok)throw new Error('譜面載入失敗');
        return await response.text();
    }
    catch(error)
    {
        console.log('發生錯誤',error);
    }
}